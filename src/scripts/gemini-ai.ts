import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: API_KEY });

const getPrompt = (query: string) => {
  const prompt = `You are a chatbot for our company website. Answer client or vendor queries based only on the company overview below.

[COMPANY OVERVIEW]
We're a team of innovators and problem-solvers dedicated to powering business growth. 
We provide a suite of services:
- Software: Intuitive, powerful systems for unique business needs.
- E-commerce & Quick Commerce: Fast, secure, user-friendly platforms that convert visitors into customers.
- IT Operations: Reliable, secure technology infrastructure.
- Voice Support: Professional customer service to strengthen brand reputation.

[INSTRUCTIONS]
1. Use only the information from the company overview to answer.  
2. Keep responses short, clear, professional, and chatbot-friendly.  
3. If the query is unrelated, reply:  
   "I’m here to help with queries about our company and services. Could you please ask something related?"  
4. If the query is vague, politely ask for clarification.  
5. Do not invent features or details that are not mentioned.  

[CLIENT QUERY]
${query}

`;

  return prompt;
};

async function generateChatBotAnswer(query: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: getPrompt(query),
  });
  return response.text;
}

export default generateChatBotAnswer;
