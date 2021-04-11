import fetch from "isomorphic-unfetch";
import auth0 from "../../lib/auth0";
import Cors from "cors";
// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "POST"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function session(req, res) {
  await runMiddleware(req, req, cors);
  try {
    const tokenCache = auth0.tokenCache(req, res);
    const { accessToken } = await tokenCache.getAccessToken();
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
