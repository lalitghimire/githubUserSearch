# get base image
FROM node

# set working directory
WORKDIR /app

# copy files
COPY ./package.json ./package-lock.json /app/

# install dependencies
RUN npm install

COPY . .
#start the application
CMD [ "npm", "run", "start" ]