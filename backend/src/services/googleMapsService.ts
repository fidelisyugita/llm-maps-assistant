import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from "../config/index.js";

interface PlaceResult {
  name: string;
  address: string;
  mapLink: string;
  embedUrl: string;
}

export async function findPlaces(
  query: string,
  location: string
): Promise<PlaceResult[]> {
  const textSearchURL =
    "https://maps.googleapis.com/maps/api/place/textsearch/json";

  console.log("Query to Maps");
  const response = await axios.get(textSearchURL, {
    params: {
      query: `${query} in ${location}`,
      key: GOOGLE_MAPS_API_KEY,
    },
  });
  console.log("Google raw response:", response.data);

  return response.data.results.slice(0, 5).map((place: any): PlaceResult => {
    const name = place.name;
    const address = place.formatted_address;
    const queryForLink = `${name} ${address}`;

    return {
      name,
      address,
      mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        queryForLink
      )}`,
      embedUrl: `<iframe src="https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
        queryForLink
      )}" width="100%" height="400"></iframe>`,
    };
  });
}
