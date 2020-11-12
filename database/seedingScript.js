const dbFuncs = require('./index.js');
const faker = require('faker');

let createDestinationObject = () => {
    let seedingCounter = 0;
    let index = 1;

    let getRandomNumber = () => {
        let max = 5
        let min = 0
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    while (index <= 100) {
        destinationObject = {
            id: index,
            name: faker.address.country(),
            heart: faker.random.boolean(),
            reviews: faker.random.number(),
            averageRating: getRandomNumber(),
            overview: faker.lorem.sentence(),
            address: faker.address.city()
        }
            seedingCounter++
            index++ 
            dbFuncs.save(destinationObject)
    };
};

module.exports = createDestinationObject;

