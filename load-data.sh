#! /bin/bash

mongoimport --db homework2 --collection users --type json --jsonArray sample-data.json
