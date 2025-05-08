# Use official Node image
FROM node:lts-slim

# Set work directory
WORKDIR /app

# Default value, can be overridden
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Install dependencies first (for better caching)
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps --force

# Copy the rest of the app
COPY . .

# Only build if in production
RUN [ "$NODE_ENV" = "production" ] && npm run build || echo "Skipping build in dev mode"

# Expose port (Next.js default is 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
