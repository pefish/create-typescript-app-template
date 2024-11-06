FROM node:lts-stretch AS builder
WORKDIR /app
ADD . .
RUN npm install && npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/lib /app/lib
CMD ["node", "/app/lib/start.js"]

# docker build --progress=plain -t pefish/app-name:v0.0.1 .
# docker run -ti --env-file ./.env --name app-name pefish/app-name:v0.0.1
# docker buildx build --progress=plain --platform linux/amd64 --push -t pefish/app-name:v0.0.1 .
