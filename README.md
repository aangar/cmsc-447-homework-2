# CMSC447 Homework 2 - Basic CRUD App

Author: AJ Angarita

## Required Dependencies/Packages
- MongoDB (specifically mongosh, the "Mongo Shell")
- Docker (Docker Desktop if you're not on Linux)
- NodeJS
- NPMJS

## Setup - Prerequisites
Please install MongoDB and ensure that you have mongosh installed. I did this on Linux and there are guides
for doing it on Windows/MacOS. You do NOT need the database running locally as Docker will handle this.
<br/>
Next, install Docker. For a better time visually please install Docker Desktop. Again, I'm not familiar
with how to do this since this is being developed on a Linux machine. Verify that you have the command `docker compose`
available within your terminal.
<br/>
Finally you will need NodeJS and NPMJS. They may come bundled together but you can ensure they have installed correctly by
verifying the commands `npm --version` and `node --version` output something without error.
<br/>

## Setup - Starting Your Services
In the root directory of the repository there is a file called "docker-compose.yml". Run the following in said directory: <br/>
`docker compose up -d`
<br/>
This may take a few moments, but if you open Docker Desktop (if installed), you should see the Mongo 6 Container running. Alternatively,
you can verify by connecting with the Mongo Shell by running `mongosh`.
<br/>
<br/>
<br/>
Next, import the sample data. Please run the script "load-sample-data.sh". It may require you to give it executable permissions. If it fails,
you most likely need to verify you installed the Mongo Shell correctly. The error output should tell you all you need to know. Alternatively, if you 
installed MongoDB Compass (this may come bundled) you can import the "sample-data.json" file directly. You will need to create the "homework2" database
and "users" collection manually, though. **THIS I HAVE NOT TESTED AND WILL NOT BE HELD ACCOUNTABLE FOR**.
<br/>
Now, you can start the UI! This is done with NextJS and it handles the visual aspect and all CRUD operations. Do the following.
1. `cd homework-2-ui && npm install` (this may take some time to complete)
2. `npm run dev`

You should get a confirmation that it has started on https://localhost:3000, or on Port 3000. You can now access it in your browser!

