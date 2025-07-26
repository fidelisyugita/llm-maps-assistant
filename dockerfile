
---

## 🐳 `Dockerfile`
```dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "dist/index.js"]
