#STAGE 1
FROM node:16-alpine AS build
WORKDIR /usr/src/app
COPY /package*.json ./
RUN npm ci
COPY . .
RUN npm run build

#STAGE 2
FROM nginx:1.17.1-alpine
RUN rm -rf /usr/share/prokopyev.site/html
COPY --from=build /usr/src/app/dist/front /usr/share/prokopyev.site/html
COPY cert.pem /etc/ssl/cert.pem
COPY key.pem /etc/sll/key.pem
COPY cloudflare.crt /etc/ssl/cloudflare.crt
COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
