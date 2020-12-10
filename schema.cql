--DROP KEYSPACE IF EXISTS tripadvisorinfo;

CREATE KEYSPACE IF NOT EXISTS tripadvisorinfo 
WITH REPLICATION = {'class': 'NetworkTopologyStrategy', 'datacenter1': 1};

USE tripadvisorinfo;

DROP TABLE IF EXISTS listing;

CREATE TABLE IF NOT EXISTS listing (
    id int,
    name text,
    address text,
    overview text,
    openNow text,
    suggestedDuration int,
    reviewsNum int,
    avgRating int,
    userHeart BOOLEAN,
    toursNum int,
    travelersChoice BOOLEAN,
    gallery list<text>,
    PRIMARY KEY (id)
);

COPY listing(id,name,address,overview,openNow,suggestedDuration,reviewsNum,avgRating,userHeart,toursNum,travelersChoice,gallery) FROM '/Users/annie/Desktop/hackreactor/topDescriptionService/database/cassandra/cassandraData.csv' WITH header=true and delimiter = '|';

