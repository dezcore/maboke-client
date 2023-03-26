# syntax=docker/dockerfile:1
FROM node:lts-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM base as test
EXPOSE 8080
RUN npm run test

FROM base as dev
EXPOSE 8080
CMD ["npm", "run", "dev"]

FROM base as prod
RUN npm run build
