FROM node:13.7-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

CMD ['yarn', 'dev']
