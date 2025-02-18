# CMSC447 Homework 2 - Basic CRUD App

Author: AJ Angarita

## Required Dependencies/Packages
- MongoDB (specifically mongosh, the "Mongo Shell")
- Docker (Docker Desktop if you're not on Linux)
- NodeJS
- NPMJS

## Things to Take Note Of
**You do not have to use Docker if you do not wish to install it. However, MongoDB must be running locally
on mongodb://localhost:27017 (which is the default port).**
<br/>
If you do not use Docker and use a host-controlled MongoDB instance, all will still work, but you
are responsible for the cleanup and management of said database. This application requires the following MongoDB configuration:
1. MongoDB must be running locally and accessible (verify via connecting with MongoDB Compass or `mongosh`)
2. There must be a `homework2` database.
3. There must be a `users` collection in the `homework2` database.

## (Optional) Setup - With Docker
**If you would not like to use Docker, please skip this step. It is not required, but I prefer it.**
Please install Docker and Docker Desktop for your host machine. I did this on Linux and did NOT use 
Docker Desktop, so I am not linking installation guidelines for that.
<br/>
Once Docker is installed and Docker Desktop is available, please go into the root directory of the project.
Run `docker compose up -d` and you should see a container appear within Docker Desktop.
<br/>
If there are any errors you have most likely configured/installed Docker incorrectly.
<br/>
Now, you may continue with the "Setup - No Docker" Guide.

## Setup - No Docker
First, install MongoDB. Most guides should include steps for installing MongoSH, you will need that.
<br/>
Windows: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#std-label-install-mdb-community-windows
<br/>
MacOS: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#std-label-install-mdb-community-macos
<br/>
Finally, open your terminal of choice and verify that running `mongosh` exists. If it does not connect that is fine, though it should if
you correctly installed MongoDB.
<br/>
You can load the data one of two ways:
1. Using the `load-data.sh` script. This requires `mongosh`.
2. Manually importing the JSON data. If you have Mongo Compass, create the `homework2` database and `users` collection, then import the .json file in this repository into that collection.
**If you are doing this the Docker method, please search how to disable the database service on your host OS.**
<br/>
Finally you will need NodeJS and NPMJS. They may come bundled together but you can ensure they have installed correctly by
verifying the commands `npm --version` and `node --version` output something without error.
<br/>

## Setup - Starting Your Services
Now, you can start the UI! This is done with NextJS and it handles the visual aspect and all CRUD operations. Do the following.
1. `cd homework-2-ui && npm install` (this may take some time to complete)
2. `npm run dev`

You should get a confirmation that it has started on https://localhost:3000, or on Port 3000. You can now access it in your browser!

