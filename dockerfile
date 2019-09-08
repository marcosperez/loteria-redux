FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY server/package*.json ./

USER node

RUN npm install

COPY --chown=node:node ./server .
COPY --chown=node:node ./web ./web

RUN cd web && yarn build && cp -r build ../build

EXPOSE 8080

CMD [ "npm", "start" ]
