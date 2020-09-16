FROM node:12.4.0-alpine as build

# Create app directory
# RUN mkdir -p /tmp/ES6-APP
WORKDIR /usr/app

# Install app dependencies
# COPY package.json /usr/src/app/
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Compile app sources
# RUN yarn build

# Remove dev dependencies
#RUN npm prune --production

# Expose port and CMD
EXPOSE 8081
CMD ["yarn", "dev"]