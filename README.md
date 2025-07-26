🗺️ Local LLM Maps Assistant

A full-stack AI-powered map assistant that uses a locally hosted LLM (Mistral via Ollama) to recommend places to eat/go, and displays the results on an interactive Google Map. Built with Node.js, React, and Docker.

🚀 Features

🔗 Ask natural language questions like “Where should I eat ramen near Jakarta?”

🤖 Uses Mistral (via Ollama) to return structured JSON with recommended places

📍 Displays map locations using Google Maps JavaScript API

🗺️ Supports embedded map previews and external directions

🔐 Secured connection to Google Maps API

🐳 Fully containerized with Docker and Docker Compose

🧠 Architecture Overview

[Frontend (React)]
↕
[Backend API (Node.js)]
↕
[Ollama + Mistral]
↕
[Google Maps API]

🛠️ Tech Stack

Backend: Node.js, Express.js, Axios

Frontend: React.js, Tailwind CSS (or optional UI framework)

LLM: Mistral via Ollama

Maps: Google Maps JavaScript API

DevOps: Docker, Docker Compose

⚙️ Setup Instructions

1. Clone the Repository

git clone https://github.com/fidelisyugita/llm-maps-assistant.git
cd llm-maps-assistant

2. Setup Environment Variables

Create a .env file in the root directory:

GOOGLE_MAPS_API_KEY=your_google_maps_api_key
OLLAMA_HOST=http://ollama:11434
PORT=3001

3. Run with Docker

docker-compose up --build

Access Web App: http://localhost:3000

Backend API: http://localhost:3001

Ollama: http://localhost:11434

4. Preload Mistral Model (if not auto-pulled)

ollama pull mistral

Or include this step in the Dockerfile.

💬 Example Usage

User Prompt:

"Where should I eat ramen in Jakarta?"

LLM Response (via Mistral):

[
{
"name": "Ramen Seirock-Ya",
"address": "Jl. Senopati No.43, Jakarta",
"lat": -6.229728,
"lng": 106.812345,
"map_url": "https://maps.google.com/?q=Ramen+Seirock-Ya"
},
...
]

UI Output:

Place cards with name, address, and embedded Google Map

Button to open directions in Google Maps

🔒 Security Notes

Google Maps API key is securely passed via .env and never exposed to the public repo.

Usage limits and billing set on the Google Cloud Console to avoid overcharges.

📄 Assumptions

The LLM response is parsed and validated on the backend to match a strict schema.

Mistral is prompt-engineered to return JSON (via system instructions).

Only one LLM model (Mistral) is needed for this use case.

Open WebUI was used for local testing/debugging but is not required in the final solution.

📦 Folder Structure

.
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── routes/
│ │ ├── services/
│ │ └── index.ts
│ ├── Dockerfile
│ ├── package.json
│ └── tsconfig.json
├── frontend/
│ ├── src/
│ │ └── App.tsx
│ ├── Dockerfile
│ └── package.json
├── docker-compose.yml
└── README.md
