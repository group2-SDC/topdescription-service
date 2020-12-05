--in case imports same database over and over each time we run postgres
DROP DATABASE IF EXISTS tripadvisorinfo;

--creates new db
CREATE DATABASE tripadvisorinfo;

--allows to start from necessary db
\c tripadvisorinfo

DROP TABLE IF EXISTS gallery;
DROP TABLE IF EXISTS listing;




--listing table 
CREATE TABLE listing (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    address VARCHAR,
    overview VARCHAR,
    openNow VARCHAR,
    suggestedDuration INTEGER,
    reviewsNum INTEGER,
    avgRating INTEGER,
    userHeart BOOLEAN,
    tourNum INTEGER,
    travelersChoice BOOLEAN
);

--gallery table
CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    listing_id INTEGER NOT NULL,
    imageURL VARCHAR(255)
);

-- psql postgres < schema.sql