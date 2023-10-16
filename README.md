## Meeting requirements:
- **Movies List**
  - User is able to load and see List of Movies 
  - User can search, regex against movie name is applied  
  - User can filter list by Genre 
  - User will be  redirect to the selected &#39;movie detail&#39; after clicking on a particular movie

- **Movie detail**
  - User will see details of the selected movie 
  - User will be able to navigate back to &#39;movie list&#39; from movie detail page 

- **Navigation**
  * Using the back and forward button of the browser works 
  * Reloading the list and details page works 

## How to run
1. ### Server
    Whole project is organised in context of node.js server.
    Whole backend/server application code is within server folder
2. ### Images
    Images are served from images folder which is mapped as node.js static path.
2. ### Client/UI
    Whole react application is within "client" folder. Is is completly separted project, has its own package.json and node_modules

### How to run in during development
1. First start server in dev mode with:
    ```
    npm run dev
    ```
    this will run server in reload mode with nodemon
2. Then go to client folder and run "npm start" there
    ```
    cd ./client
    npm start
    ```
### How to prepare and run in "production" like mode
1. First run build
    ```
    npm run build
    ```
    this will build react application and copy build from client to root folder, later build folder will be mapped to root path of node server.
    This way built react application will be available as 
    ```
    http://server-address:8080/
    ```
    server api will be at:
    ```
    http://server-address:8080/api
    ```    
    images will be at:
    ```
    http://server-address:8080/images
    ```        
2. After build step just run:
    ```
    npm start
    ```
    
## Technologies used

- ReactJS
- React Router DOM
- Scss/Material UI
- Redux toolkit

## Extras
- Application is able to stay functional and usable on most of device screen sizes
- Serving data from nodejs server via API call
- Application is buildable as docker image via Docker file,for example
  ```
  docker build -t movies:0.0.1 .
  ```
- Application is available as docker image from hub.docker.com as "antesplit/bgroup-movies:latest" image, can be started on local machine with command (need to have docker on machine and free 8080 port )
  ```
  docker run -d -p 8080:8080 antesplit/bgroup-movies:latest
  ```

