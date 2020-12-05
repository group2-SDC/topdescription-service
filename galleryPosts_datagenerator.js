// generator.js
const fs = require('fs')
const argv = require('yargs').argv
const faker = require('faker');
const { image } = require('faker');

const lines = argv.lines || 10;
const filename = argv.output || 'galleryPosts.csv'
const writeStream = fs.createWriteStream(filename);
let listingID = 10000000;

let createPost = () => {
    //need to fix this function and whole createpost to render randomlisting_id and gallery url 

    let imageNum = (Math.floor(Math.random() * (1000 - 1 + 1)) + 1).toString().padStart(4, 0);

    //find way to pull s3 url into gallery that is randomized
    const listing_id = listingID;
    const gallery = `https://tripadvisor-carousel-dump.s3-us-west-2.amazonaws.com/galleryImages/${imageNum}.jpg;`
    // galleryNum--;

    return `${listing_id},${gallery}\n`

};

const startWriting = (writeStream, encoding, done) => {
    // let i = lines;
    // let listingID = 11;
    let galleryNum = 0;

    function writing () {
      let canWrite = true;
      
      do {
        // i--;
        if (galleryNum === 0) {
            listingID--;
            galleryNum = Math.floor(Math.random() * (15 - 5 + 1)) + 5; 
          }; 

        let post = createPost();
        //check if at end of listingID
        if (listingID === 0) {
          // we are done so fire callback
          writeStream.write(post, encoding, done);
        } else {
          // we are not done so don't fire callback
          writeStream.write(post, encoding);
          galleryNum--;

          //monitor data accumulation
          if (listingID === 100000) {
              console.log('at hun thou');
          }
          if (listingID === 1000000) {
            console.log('at mill');
          }
            if (listingID === 10000000) {
                console.log('at ten mill');
          }
        }
        //else call write and continue looping
      } while (listingID > 0 && canWrite)

      if (listingID > 0 && !canWrite) {
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
  
