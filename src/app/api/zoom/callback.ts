// pages/api/zoom/callback.ts
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }

  try {
    const { data } = await axios({
      method: "POST",
      url: "https://zoom.us/oauth/token",
      params: {
        grant_type: "authorization_code",
        code,
        redirect_uri: `${process.env.NEXT_PUBLIC_DOMAIN}/api/zoom/callback`,
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Optionally, store the access token in a secure, server-side session or encrypted storage
    // Redirect to a client-side route that can handle the session securely
    res.redirect(`/dashboard?token=${data.access_token}`);
  } catch (error) {
    console.error("Zoom OAuth error:", error);
    res.status(500).json({ error: "Failed to authenticate with Zoom" });
  }
}
