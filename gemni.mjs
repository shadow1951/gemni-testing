import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export const aiBot = async (message) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: message,
  });
  console.log("Response from Gemini:", response);
  return response;
};
