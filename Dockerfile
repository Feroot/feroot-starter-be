FROM node:18-slim

WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json ./

RUN npm ci --audit false --fund false && npm cache clean --force

COPY . ./

ENTRYPOINT ["npm", "start"]