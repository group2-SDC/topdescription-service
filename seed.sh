#!/bin/bash
 
###################################################
# Bash script to create database and seed 
###################################################

# # Variable Definitions
# # Path to directory bash script is living
# # DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# # Database Variable Definitions
# DATABASE="blog"
# USER="superuser"

# # Output Filename for Faker File
# OUTPUT="listingsPosts.csv"
# FILEPATH="$DIR/$OUTPUT"
# # if parameter 1 is not passed as argument default records to be generated to 1000000
# LINES=${1:-10}

# ### Import Our Database ###
# # Dont specify a database since CREATE DATABASE is in schema.sql
# SCHEMA="$DIR/schema.sql"
# psql postgres < schema.sql
# psql -U $USER < $SCHEMA

### Run Our Generator Script ###
# node generator.js --output=$FILEPATH --lines=$LINES

### Import Our posts.csv file to seed Database ###
psql -U annie -d tripadvisorinfo -c "COPY $DATABASE FROM '$FILEPATH' CSV HEADER";