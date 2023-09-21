const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");
dotenv.config;

const googleAuth = async (req, res) => {
  const redirectUrl = "http://localhost:3000/oauth";

  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    prompt: "consent",
  });

  res.status(200).json({
    message: "Url Generated",
    status: "sucesss",
    url: authorizeUrl,
  });
};

module.exports = { googleAuth };