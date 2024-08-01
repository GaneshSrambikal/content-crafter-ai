'use client';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(String(apiKey));

// model
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

// config
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

// chat sessions for each conversation
export const chatSession = model.startChat({
  generationConfig: generationConfig,
  history: [],
});
