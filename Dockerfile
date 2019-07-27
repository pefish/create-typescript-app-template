FROM node:10-stretch as builder
WORKDIR /app
ADD . .
RUN mkdir -p /app/log
RUN yarn install && yarn build

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/lib /app/lib
ENV NODE_CONFIG /app/config/pom.json
ENV NODE_SECRET /app/secret/pom.json
