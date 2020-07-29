FROM node:13

RUN mkdir /app

COPY ./app /app

WORKDIR /app
RUN npm ci

RUN npm install -g pm2

EXPOSE 2020
CMD pm2 start --no-daemon server.js