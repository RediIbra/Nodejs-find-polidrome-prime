# Nodejs-find-polidrome-prime

### PROJECT DESCRIPTION<br>
- Node.js application with __Typescript__ also added error handling for each situation and prevented it for inserting strings (for sql injection for demo purposes because we don't have to build queries in this project).

- URL of the API __"localhost:7007/api/v1/findPalindrome"__ so you can test on Postman

- I have added some comments so you can understand the code.

- Added __helmet__ for securing our HTTP headers

- In tsconfig.json You have all typescript configurations for the project, and all code is bundled in __"/dist"__ folder.

- Added __Dockerfile__ for creating images and containers in Docker

- Added jest.config.js to configure the __Unit testing__

### RUN PROJECT
1. To install node modules ===> __npm install__<br>
2. Run this command to active watcher mode in typescript ===> __tsc -w__ <br>
3. Run the project ===> __npm start__<br>

### RUN DOCKER
1. Run this comand ===> __docker build -t nodeapp .__<br>
2. To run the project on docker container run this comand ===> __docker run --name nodeapp_c -p 7007:7007 nodeapp__ <br>
3. If you want to stop the container ===> __docker stop nodeapp_c__ (optimal) <br>
4. Remove the container ===> __docker rm nodeapp_c__ (optimal)
### RUN UNIT TESTING
- In terminal run the command ===>__npm test__ <br>

## THANK YOU !!! <br>

![4iLw261NYmI75Vfek2tOjV7zsGVZzXAgp5GhSD0k2tE](https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif)
