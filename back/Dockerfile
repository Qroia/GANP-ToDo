FROM node:16-alpine AS builder
WORKDIR /app
COPY /*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3001
CMD ["npm", "run", "start:prod"]