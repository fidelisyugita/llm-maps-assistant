export interface LocationResult {
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating?: number;
  user_ratings_total?: number;
  place_id: string;
}

export interface SearchRequest {
  query: string;
  location: string;
}
export interface Place {
  name: string;
  address: string;
  mapLink: string;
  embedUrl: string;
}
