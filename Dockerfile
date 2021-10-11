FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install fs-extra
RUN npm install express.js
RUN npm i node-json2html


# Bundle app source
COPY . .

EXPOSE 9198
CMD [ "node", "server.js" ]