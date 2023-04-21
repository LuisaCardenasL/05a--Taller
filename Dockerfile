FROM node:14-alpine

WORKDIR /DSII

COPY ./package*.json ./

RUN npm install

CMD ["npm", "test"]