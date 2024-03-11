# Use an official Node.js runtime as a parent image
FROM node:20.11.1-alpine

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code to the container
COPY . .

# Define the command to run your application
CMD ["npm", "run", "dev"]

Expose 8000