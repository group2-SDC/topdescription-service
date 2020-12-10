--in case imports same database over and over each time we run postgres
--DROP DATABASE IF EXISTS tripadvisorinfo2;

--creates new db
CREATE DATABASE tripadvisorinfo2;

--allows to start from necessary db
\c tripadvisorinfo2

--DROP TABLE IF EXISTS listing;
--DROP TABLE IF EXISTS gallery;




--listing table 
CREATE TABLE listing (
    id SERIAL,
    name VARCHAR,
    address VARCHAR,
    overview VARCHAR,
    openNow VARCHAR,
    suggestedDuration INTEGER,
    reviewsNum INTEGER,
    avgRating INTEGER,
    userHeart BOOLEAN,
    tourNum INTEGER,
    travelersChoice BOOLEAN,
    PRIMARY KEY (id)
);

--gallery table
CREATE TABLE gallery (
    id SERIAL,
    listing_id INTEGER NOT NULL,
    CONSTRAINT listing_fk
        FOREIGN KEY (listing_id)
        REFERENCES listing(id),
    imageURL VARCHAR(255),
    PRIMARY KEY (listing_id, id)
);

-- psql postgres < schema2.sql