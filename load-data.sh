#! /bin/bash

# drops old data
mongosh --eval "use homework2;" --eval "db.users.drop()"

# import new data
mongoimport --db homework2 --collection users --type json --jsonArray sample-data.json
