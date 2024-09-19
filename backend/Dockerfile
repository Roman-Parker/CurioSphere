# Use an official Node.js image
FROM node:16

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm Install

# Copy the rest of the application files
COPY . .

EXPOSE 5000

# Start backend server
CMD [ "npm", "start" ]