# Use an official Node.js image as the base image
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies
RUN npm install 
# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller base image for the production build
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/next.config.js ./next.config.js

# Expose the port that your Next.js app will run on
EXPOSE 3004

# Start the Next.js app
CMD ["npm", "start"]
