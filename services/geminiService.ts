import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This will be handled by the execution environment, but it's good practice to have a check.
  console.warn("API_KEY environment variable not set. The app will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY as string });

export const generateImages = async (
  prompt: string,
  style: string,
  aspectRatio: "1:1" | "16:9" | "9:16" | "4:3" | "3:4",
  numberOfImages: number = 4
): Promise<string[]> => {
  try {
    const fullPrompt = `${prompt}, in a ${style.toLowerCase()} style.`;

    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: fullPrompt,
      config: {
        numberOfImages: numberOfImages,
        outputMimeType: 'image/png',
        aspectRatio: aspectRatio,
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      return response.generatedImages.map(
        (img) => `data:image/png;base64,${img.image.imageBytes}`
      );
    }
    
    return [];
  } catch (error) {
    console.error("Error generating images:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate images: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating images.");
  }
};
