FROM node:12.12.0-alpine

COPY package.json .
COPY package-lock.json .

WORKDIR /app

RUN apk update && \
    npm install -g npm @vue/cli && \
    npm install