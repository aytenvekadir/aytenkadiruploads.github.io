export default async function handler(req, res) {
  const { code } = req.query;

  const response = await fetch("https://api.dropboxapi.com/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      code: code,
      grant_type: "authorization_code",
      client_id: process.env.APP_KEY,
      client_secret: process.env.APP_SECRET
    })
  });

  const data = await response.json();

  res.json(data);
}
