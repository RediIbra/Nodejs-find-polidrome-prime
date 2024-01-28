FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install


EXPOSE 7007


CMD ["npm", "start"]