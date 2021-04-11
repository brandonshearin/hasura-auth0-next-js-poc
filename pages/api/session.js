import fetch from "isomorphic-unfetch";

import auth0 from "../../lib/auth0";

export default async function session(req, res) {
  try {
    res
      .status(200)
      .json({
        accessToken:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjFPVExUREhVX2VYbU42aDBEamZCeiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTExNTM0NjQ3Mzc0NDczMjEwMjExIn0sImlzcyI6Imh0dHBzOi8vZGV2LTRjcDk2dHo3LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMTUzNDY0NzM3NDQ3MzIxMDIxMSIsImF1ZCI6WyJodHRwczovL2hhc3VyYS5pby9sZWFybiIsImh0dHBzOi8vZGV2LTRjcDk2dHo3LnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MTgxNzc4NTEsImV4cCI6MTYxODI2NDI1MSwiYXpwIjoienhtZDdNZ2NhdzZWSHZqZEtOUzU3eVlPcHRHbTlKSEQiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIn0.rxmH-WSJqBTAOuLD8hWhCuynNsOFyl6JsP9DLgS13gh2ua-yf6m3yX3QL6L8-SOc_8HOGUp-9Z-rO_YDom8mDymBYjgyTF0vPUgD0wKtxajI3XCUMMQBN7WHvSAzZY120OZS1VzWPkMlEcDnrXhhcMDo3w23gXmv9Szuxw_6XpfQiWP8q-QT4B66aBDoV5vgAVp_R_BNkHHr3ox8pW2HFP9JA1PCugcqbRNyYzN8Bap24EB5WgodsFg4BaPmMsp2OQYcuByMywZLD3xZKtrdJCpYijE7aEVcKPShyfW9pLMKVxyfaxSa0uuJN-1JMwTft3N8_pZSDIxyWkAd9yUeXQ",
      });
    // const tokenCache = auth0.tokenCache(req, res);
    // const { accessToken } = await tokenCache.getAccessToken();
    // res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
