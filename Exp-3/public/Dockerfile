# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy your static website files into the container
COPY . /usr/share/nginx/html

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]