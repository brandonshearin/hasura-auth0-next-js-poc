const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: "openid profile",
    REDIRECT_URI:
      process.env.REDIRECT_URI || "http://localhost:3000/api/callback",
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000/",
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200, // 2 hours
    APP_HOST: process.env.DOMAIN,
  },
};
