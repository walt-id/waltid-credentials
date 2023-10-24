FROM docker.io/node:20
ADD .output/ /app

WORKDIR /app

EXPOSE 3000
ENTRYPOINT node server/index.mjs
