import axios from "axios";

export async function askPlaces(question: string) {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}chat`, {
    question,
  });

  if (res.status < 200 || res.status >= 300) {
    const error = res.data;
    throw new Error(error?.message || "Failed to fetch places");
  }

  return res.data;
}
