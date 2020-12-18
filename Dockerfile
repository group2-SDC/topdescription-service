FROM node:12

WORKDIR /topDescriptionService

COPY package*.json ./

RUN npm install

COPY . . 

ENV PORT = 3001

EXPOSE 3001

RUN npm run build

CMD [ "npm", "start" ]