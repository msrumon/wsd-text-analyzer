FROM node:lts-alpine AS build

WORKDIR /tmp/app

COPY ./package*.json ./

RUN npm install

COPY ./tsconfig.json ./
COPY ./src ./src

RUN npm run build

FROM node:lts-alpine AS main

ENV NODE_ENV production

WORKDIR /home/node

COPY --chown=node:node ./data ./data
COPY ./package.json ./
COPY --from=build --chown=node:node /tmp/app/node_modules ./node_modules
COPY --from=build --chown=node:node /tmp/app/dist ./dist
COPY --from=build --chown=node:node /tmp/app/src/views ./dist/views

RUN npm prune

EXPOSE 8080

USER node

CMD [ "npm", "start" ]
