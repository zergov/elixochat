# build the application
FROM node:8-alpine as build-stage

WORKDIR /app

RUN npm install -g react-scripts --silent

COPY package.json /app
RUN npm install --silent

COPY ./ /app
RUN npm run build

# Serve the app via nginx
FROM nginx:1.15

COPY --from=build-stage /app/build /usr/share/nginx/html
