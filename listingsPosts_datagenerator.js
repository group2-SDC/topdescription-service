// generator.js
const fs = require('fs')
const argv = require('yargs').argv
// const helperFuncs = require('./index.js.js');
const faker = require('faker');
const { image } = require('faker');

const lines = argv.lines || 10000000
const filename = argv.output || 'listingsPosts.csv'
const writeStream = fs.createWriteStream(filename)


let createPost = () => {

    let max = 12;
    let min = 5;
    let tourCount = Math.floor(Math.random() * (max - min + 1)) + min;

    let generateHoursOfOperation = () => {
        let hoursOfOperation = ['', '8:00 AM - 10:00 PM', '6:00 AM - 8:00 PM', '8:00 AM - 5:00 PM', '10:00 AM - 11:00 PM'];
        let max = hoursOfOperation.length - 1;
        let min = 0;
        let hours = Math.floor(Math.random() * (max - min + 1)) + min;
        return hoursOfOperation[hours];
    }

    let getRandomNumber = () => {
        let max = 5;
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
    const name = faker.address.country();
    const travelersChoice = faker.random.boolean();
    const userHeart = faker.random.boolean();
    const reviewsNum = faker.random.number();
    const avgRating = getRandomNumber();
    const overview = faker.lorem.paragraph();
    const address = faker.address.streetAddress() + ' ' + faker.address.city() + ', ' + faker.address.state() + ' ' + faker.address.zipCode();
    const toursNum = tourCount;
    const suggestedDuration = getRandomNumber();
    const openNow = generateHoursOfOperation();

    return `${name},${address},${overview},${openNow},${suggestedDuration},${reviewsNum},${avgRating},${userHeart},${toursNum},${travelersChoice}\n`

};

const startWriting = (writeStream, encoding, done) => {
    let i = lines;

    function writing () {
      let canWrite = true;

      do {
        i--;
        let post = createPost();
        //check if i === 0 so we would write and call `done`
        if (i === 0) {
          // we are done so fire callback
          writeStream.write(post, encoding, done)
        } else {
          // we are not done so don't fire callback
          canWrite = writeStream.write(post, encoding);
            //monitor data accumulation
        }
        //else call write and continue looping
      } while (i > 0 && canWrite)

      if (i > 0 && !canWrite) {
        //our buffer for stream filled and need to wait for drain
        // Write some more once it drains.
        writeStream.once('drain', writing);
      }
    }
    writing();
  }
  
  //write our `header` line before we invoke the loop
  writeStream.write(`name,address,overview,openNow,suggestedDuration,reviewsNum,avgRating,userHeart,toursNum,travelersChoice\n`, 'utf-8');
  //invoke startWriting and pass callback
  startWriting(writeStream, 'utf-8', () => {
    writeStream.end()
  });
  
//post on terminal to check
//node listingsPosts_datagenerator.js --output listingsPosts.csv

//first generating took 10 minutes