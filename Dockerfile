FROM node:lts-stretch AS builder
WORKDIR /app
ADD . .
RUN npm install && npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/lib /app/lib
CMD ["node", "/app/lib/start.js"]

# docker build --progress=plain -t app-name:v0.0.1 .
# docker run -ti --name app-name app-name:v0.0.1
