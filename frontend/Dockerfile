# Use an official Node.js image
FROM node:16

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 8080

# Start the frontend server
CMD ["npm", "run", "serve"]
