# Specify a base image
FROM node:alpine

# Install some dependencies
COPY package.json .
RUN npm install

# Copy the rest of the code
COPY . .

# Default command
CMD ["npm", "start"]