FROM node:12.9.0-alpine AS installer

WORKDIR /usr/src/app
ADD package*.json ./

RUN npm install