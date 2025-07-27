import { useState } from "react";
import "./App.css";
import type { LocationResult } from "./types/MapResponse";
import { searchPlaces } from "./services/maps";

function App() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState<LocationResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await searchPlaces(query, location);
      setResults(data);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Find Places</h1>
      <input
        type="text"
        placeholder="What to search?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <input
        type="text"
        placeholder="Location (e.g., Berlin)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        style={{ marginLeft: "1rem" }}
      >
        {loading ? "Searching..." : "Search"}
      </button>

      <ul>
        {results.map((place) => (
          <li key={place.place_id}>
            <strong>{place.name}</strong> - {place.address} ({place.lat},{" "}
            {place.lng}){" "}
            {place.rating && (
              <>
                ⭐ {place.rating} ({place.user_ratings_total})
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
