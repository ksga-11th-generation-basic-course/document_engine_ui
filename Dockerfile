# Base image
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the Vite.js app
RUN npm install -g vite && \
    vite build

# Use a lightweight server to serve the built app
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built app from the previous stage to the NGINX document root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
