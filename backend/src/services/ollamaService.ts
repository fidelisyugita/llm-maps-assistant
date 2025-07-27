import axios from "axios";
import { OLLAMA_BASE_URL } from "../config/index.js";

interface OllamaResponse {
  response: string;
  done: boolean;
}

interface LLMResult {
  places: Place[];
}

interface Place {
  name: string;
  location: string;
}

export async function askOllama(userQuery: string): Promise<LLMResult> {
  try {
    const ollamaURL = `${OLLAMA_BASE_URL}/api/generate`;
    const prompt = `Only respond in raw JSON. No explanation.
    Return 2 interesting places (name and location) for: "${userQuery}"

    Example format:
    {
      "places": [
        { "name": "Central Park", "location": "New York" },
        { "name": "Eiffel Tower", "location": "Paris" }
      ]
    }`;

    // Send the prompt to Ollama
    const response = await axios.post(ollamaURL, {
      model: "mistral",
      prompt,
      stream: false,
    });

    const raw = response.data.response;

    console.log("response raw: ", raw);
    const parsed = JSON.parse(raw);
    return parsed;
  } catch (error) {
    console.error("Error from Ollama:", error);
    throw new Error("Failed to get response from local LLM.");
  }
}
