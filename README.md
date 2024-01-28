# Nodejs-find-polidrome-prime

### PROJECT DESCRIPTION<br>
- Node.js application with typescript also added error handling for each situation and prevented it for inserting strings (for sql injection for demo purposes because we don't have to build queries in this project).

- I have added some comments so you can understand the code.

- Added helmet for securing our HTTP headers

- URL of the API (localhost:7007/api/v1/findPalindrome) so you can test on Postman

- In tsconfig.json You have all typescript configurations for the project, and all code is bundled in (/dist).

- Added Dockerfile for creating images and containers in Docker

- Added jest.config.js to configure the Unit testing

### RUN PROJECT
1.To install node modules ===> npm install
2.Run this command to active watcher mode in typescript ===> tsc -w
3.Run the project ===> npm start

### RUN DOCKER
1.Run this comand ===> docker build -t nodeapp .
2.To run the project on docker container run this comand ===> docker run -p 3000:3000 nodeapp

### RUN UNIT TESTING
-In terminal run the command ===>npm test
