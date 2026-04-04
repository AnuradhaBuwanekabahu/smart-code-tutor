const axios = require("axios");

const API_KEY = "AIzaSyCbDdniSwHNc9wHYXtW9TKy9K2PQPPQcI0";

async function test() {
  const res = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      contents: [{ parts: [{ text: "Say hello" }] }]
    }
  );

  console.log(res.data);
}

test();