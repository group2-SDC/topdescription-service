// generator.js
const fs = require('fs')
const argv = require('yargs').argv
// const helperFuncs = require('./index.js.js');
const faker = require('faker');
const { image } = require('faker');

const lines = argv.lines || 10
const filename = argv.output || 'galleryPosts.csv'
const writeStream = fs.createWriteStream(filename)


let createPost = () => {
    //need to fix this function and whole createpost to render randomlisting_id and gallery url 
    let randomListingID = () => {
        let max = 100;
        let min = 1;

        let listingID = Math.floor(Math.random() * (max - min + 1)) + min;
        return listingID;
    }

    // let generateImages = () => {
    //     let max = 30;
    //     let min = 5;

    //     let imageCount = Math.floor(Math.random() * (max - min + 1)) + min;
        
    //     let arrayOfImages = [];
        
    //     for(i = 0; i < imageCount; i++){
    //         let imageIndexMin = 80;
    //         let imageIndexMax = 200;
    //         let imageIndex = Math.floor(Math.random() * (imageIndexMax - imageIndexMin + 1)) + imageIndexMin;
    //         arrayOfImages.push(`https://picsum.photos/id/${imageIndex}/850/580`);
    //     }
    //     return arrayOfImages;
    // };

    const listing_id = randomListingID();   
    //find way to pull s3 url into gallery that is randomized
    // const gallery = ;

    return `${listing_id},${gallery}\n`

};

const startWriting = (writeStream, encoding, done) => {
    let i = lines;

    function writing () {
      let canWrite = true;

      do {
        i--
        let post = createPost();
        //check if i === number of rows needed to end writing
        if (i === 10) {
          // we are done so fire callback
          writeStream.write(post, encoding, done)
        } else {
          // we are not done so don't fire callback
          writeStream.write(post, encoding)
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
  writeStream.write(`listing_id,gallery\n`, 'utf-8');
  //invoke startWriting and pass callback
  startWriting(writeStream, 'utf-8', () => {
    writeStream.end();
  });
  
