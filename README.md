## React App for github profile search

This is a react app to display all the public Github repositories and their link of a given username.  
The project is created using create-react-app.  
Axios is used to handle HTTP request to the Github API.  
If username is not found in the github , it displays a message saying user not found.

## To run the project

Prerequisites are node installed in the system.  
Clone the repository. Go to the root of the folder and run:  
`npm install`  
`npm start`

## Docker

The project has been updated with an addition of a dockerfile. So the app can be run as a docker container. To run the app in docker container:  
Prerequisite is Docker is installed in your system.  
On root of the directory, build a docker image with the command  
`docker build -t .`  
After image is built run the container with following command,  
`docker run -it -p 3001:3000 <image name from prev step>`
This will run the app at port 3001 which can be accessed at http://localhost:3001/ .
