import { GoogleGenAI, Type } from "@google/genai";
import { DesignConceptResponse } from "../types";

// Initialize Gemini API
// API Key is managed by the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCreativeConcept = async (prompt: string): Promise<DesignConceptResponse> => {
  try {
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: `You are a creative director for "Wolf Designers", a high-energy anime-style design agency. 
      The user wants an idea for: ${prompt}.
      Provide a creative concept, a visual style description (anime inspired), and a cool tagline.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            concept: { type: Type.STRING },
            visualStyle: { type: Type.STRING },
            tagline: { type: Type.STRING }
          },
          required: ["concept", "visualStyle", "tagline"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as DesignConceptResponse;

  } catch (error) {
    console.error("Error generating concept:", error);
    return {
      concept: "System Overload. Creativity requires manual override.",
      visualStyle: "Glitch aesthetics with error messages.",
      tagline: "Error 404: Imagination Not Found"
    };
  }
};