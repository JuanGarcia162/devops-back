# Use the official Node.js image as a base image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Define environment variables
ENV DATABASE_HOST=database-2.c7ugu0cc49ak.us-east-1.rds.amazonaws.com
ENV DATABASE_NAME=fullstackbook-todo-nestjs
ENV DATABASE_USER=postgres
ENV DATABASE_PASSWORD=Cvpbdd..2022
ENV DATABASE_PORT=5432

# Start the application
CMD ["npm", "run", "start:prod"]
