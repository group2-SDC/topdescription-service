const helperFuncs = require('./index.js');
const faker = require('faker');
const { image } = require('faker');


let createDestinationObject = () => {
    let seedingCounter = 0;
    let index = 0;

    

    let generateImages = () => {
        let max = 30
        let min = 5
        let imageCount = Math.floor(Math.random() * (max - min + 1)) + min;

        let arrayOfImages = [];

        for(i = 0; i < imageCount; i++){
            arrayOfImages.push(faker.image.nature())
        }

        return arrayOfImages;
    }

    let generateTours = () => {
        let max = 12
        let min = 5
        let tourCount = Math.floor(Math.random() * (max - min + 1)) + min;
        let arrayOfTours = [];
        for(i = 0; i < tourCount; i++){
            arrayOfTours.push('The ' + faker.hacker.adjective() + ' ' + faker.hacker.noun() + ' ' + 'exerience!')
        }
        return arrayOfTours;
    }

    let getRandomNumber = () => {
        let max = 5
        let min = 0
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    while (index <= 100) {
        console.log(index)
        destinationObject = {
            id: index,
            name: faker.address.country(),
            heart: faker.random.boolean(),
            reviews: faker.random.number(),
            averageRating: getRandomNumber(),
            overview: faker.lorem.sentence(),
            address: faker.address.streetAddress() + ' ' + faker.address.city() + ', ' + faker.address.state() + ' ' + faker.address.zipCode(),
            gallery: generateImages(),
            toursAndExperiences: generateTours()
        }
            seedingCounter++
            index++ 
            helperFuncs.save(destinationObject)
    };
};

createDestinationObject() 

module.exports = createDestinationObject;

