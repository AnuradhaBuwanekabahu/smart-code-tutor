const axios = require("axios");

async function explainError(errorText, aiLanguage = "en") {
  try {
    const prompt =
      aiLanguage === "si"
        ? `Explain in SIMPLE SINHALA:\n${errorText}`
        : `Explain in SIMPLE ENGLISH:\n${errorText}`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      }
    );

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text;
  } catch (err) {
    console.log("Gemini Error:", err.response?.data || err.message);
    return "AI explanation failed";
  }
}

module.exports = explainError;