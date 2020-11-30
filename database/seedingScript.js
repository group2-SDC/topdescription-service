const helperFuncs = require('./index.js');
const faker = require('faker');
const { image } = require('faker');


let createDestinationObject = () => {

    let generateImages = () => {
        let max = 30;
        let min = 5;

        let imageCount = Math.floor(Math.random() * (max - min + 1)) + min;
        
        let arrayOfImages = [];
        
        for(i = 0; i < imageCount; i++){
            let imageIndexMin = 80;
            let imageIndexMax = 200;
            let imageIndex = Math.floor(Math.random() * (imageIndexMax - imageIndexMin + 1)) + imageIndexMin;
            arrayOfImages.push(`https://picsum.photos/id/${imageIndex}/850/550`);
        }
        return arrayOfImages;
    };

    let max = 12;
    let min = 5;
    let tourCount = Math.floor(Math.random() * (max - min + 1)) + min;
    let generateTours = () => {
        let arrayOfTours = [];
        for(i = 0; i < tourCount; i++){
            arrayOfTours.push('The ' + faker.hacker.adjective() + ' ' + faker.hacker.noun() + ' ' + 'exerience!');
        };
        return arrayOfTours;
    };

    let generateHoursOfOperation = () => {
        let hoursOfOperation = ['', '8:00 AM - 10:00 PM', '6:00 AM - 8:00 PM', '8:00 AM - 5:00 PM', '10:00 AM - 11:00 PM'];
        let max = hoursOfOperation.length - 1;
        let min = 0;
        let hours = Math.floor(Math.random() * (max - min + 1)) + min;
        return hoursOfOperation[hours];
    }

    let generateComments = () => {
        let max = 100;
        let min = 0;
        let commentCount = Math.floor(Math.random() * (max - min + 1)) + min;

        let arrayOfComments = [];

        for(i = 0; i < commentCount; i++){
            arrayOfComments.push('What a ' + faker.hacker.adjective() + ' ' + faker.hacker.noun() + ', ' + 'beautiful location!');
        };
        return arrayOfComments;
    }

    let getRandomNumber = () => {
        let max = 5;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var index = 0
    while (index < 100) {
        destinationObject = {
            id: index,
            name: faker.address.country(),
            travelersChoice: faker.random.boolean(),
            heart: faker.random.boolean(),
            reviews: faker.random.number(),
            averageRating: getRandomNumber(),
            overview: faker.lorem.paragraph(),
            address: faker.address.streetAddress() + ' ' + faker.address.city() + ', ' + faker.address.state() + ' ' + faker.address.zipCode(),
            gallery: generateImages(),
            toursAndExperiences: generateTours(),
            numberOfTours: tourCount,
            suggestedDuration: getRandomNumber(),
            comments: generateComments(),
            openNow: generateHoursOfOperation()

        }
            index++ 
            helperFuncs.save(destinationObject)
    };
};


module.exports = createDestinationObject
