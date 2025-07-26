# Use official Node base image
FROM node:20

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy source and compile
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript
RUN npx tsc

# Set the command to run the app
CMD ["node", "dist/index.js"]
