#STAGE 1
FROM node:16-alpine AS build
WORKDIR /usr/src/app
COPY /*.json ./
COPY . .
RUN npm run build

#STAGE 2
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/front /usr/share/nginx/html
