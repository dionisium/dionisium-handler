FROM node:18

WORKDIR /dist

RUN npm install

CMD ["npm", "start"]