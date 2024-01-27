FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install


EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]