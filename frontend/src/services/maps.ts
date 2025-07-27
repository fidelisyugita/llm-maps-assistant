import axios from "axios";
import type { SearchRequest } from "../types/MapResponse";

export async function searchPlaces(query: string, location: string) {
  const payload: SearchRequest = { query, location };

  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}maps/search`,
    payload
  );

  if (res.status < 200 || res.status >= 300) {
    const error = res.data;
    throw new Error(error?.message || "Failed to fetch places");
  }

  return res.data;
}
