# Use official Node image
FROM node:lts-slim

# Set work directory
WORKDIR /app
ENV NODE_ENV=production

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm ci --legacy-peer-deps --force

# Copy the rest of the app
COPY . .

# Build Next.js
RUN npm run build

# Expose port (Next.js default is 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
