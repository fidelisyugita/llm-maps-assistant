import { useState } from "react";
import type { Place } from "./types";
import { askPlaces } from "./services/chat";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Place[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await askPlaces(query);
      setResults(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch places. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">
        Travel AI: Find Places with Maps
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="e.g. sushi near Braga, Bandung"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* {results.map((group, i) => (
        <div key={i} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Group {i + 1}</h2>
          <div className="grid md:grid-cols-2 gap-6"> */}
      {results.map((place, idx) => (
        <div key={idx} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{place.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{place.address}</p>
          <div
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: place.embedUrl }}
          />
          <a
            href={place.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Open in Google Maps
          </a>
        </div>
      ))}
      {/* </div>
        </div>
      ))} */}
    </div>
  );
}

export default App;
