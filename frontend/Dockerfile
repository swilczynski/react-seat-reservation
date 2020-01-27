FROM node:10

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

EXPOSE 3000

CMD ["npm", "start"]