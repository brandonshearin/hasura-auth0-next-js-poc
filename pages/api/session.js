import fetch from "isomorphic-unfetch";
import auth0 from "../../lib/auth0";

export default async function session(req, res) {
  console.log("hey look here")
  try {
    console.log("hey look here again")
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
