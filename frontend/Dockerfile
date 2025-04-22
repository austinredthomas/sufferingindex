# Use official Node image
FROM node:18

# Set work directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps --force

# Copy the rest of the app
COPY . .

# Build Next.js
RUN npm run build

# Expose port (Next.js default is 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
