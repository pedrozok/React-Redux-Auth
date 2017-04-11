FROM node:argon
MAINTAINER Pedro Landeiroto

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies and bundle app source
COPY . /usr/src/app/
RUN npm install

EXPOSE 3000

CMD [ "webpack-dev-server", "--host", "0.0.0.0" ]
