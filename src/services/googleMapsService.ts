import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from "../config";

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

  const response = await axios.get(textSearchURL, {
    params: {
      query: `${query} in ${location}`,
      key: GOOGLE_MAPS_API_KEY,
    },
  });

  console.log("🧪 Raw Google Maps API response:", response.data);

  return response.data.results.map((place: any): PlaceResult => {
    const name = place.name;
    const address = place.formatted_address;

    return {
      name,
      address,
      mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        name + " " + address
      )}`,
      embedUrl: `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
        name + " " + address
      )}`,
    };
  });
}
