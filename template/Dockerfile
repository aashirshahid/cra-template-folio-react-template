# Use a lighter version of Node as a parent image
FROM node:14.16.0

# Set the working directory to /react-js-boilerplate
WORKDIR /react-js-boilerplate

# copy package.json into the container at /react-js-boilerplate
COPY package*.json /react-js-boilerplate/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /react-js-boilerplate
COPY . /react-js-boilerplate/

# Make port 80 available to the world outside this container
EXPOSE 8080

# Run the app when the container launches
CMD ["npm", "start"]