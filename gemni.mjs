import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const chat = ai.chats.create({
  model: "gemini-2.0-flash",
  config: {
    systemInstruction: process.env.PROMPT,
    maxOutputTokens: 500,
    temperature: 0.1,
  },
});

export const aiBot = async (message) => {
  const response = await chat.sendMessage({ message });
  return response.text;
};
