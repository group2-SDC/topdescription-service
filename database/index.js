const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird');

var db = mongoose.connection;

let destinationSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  travelersChoice: Boolean,
  heart: Boolean,
  reviews: Number,
  averageRating: Number,
  overview: String,
  address: String,
  toursAndExperiences: [ String ],
  numberOfTours: Number,
  gallery: [ String ],
  comments: [ String ],
  openNow: String,
  suggestedDuration: Number,
  duration: Number
});

let Destination = mongoose.model('destination', destinationSchema);

let save = (destination) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let destinationInstance = new Destination({
    id: destination.id,
    name: destination.name,
    travelersChoice: destination.travelersChoice,
    heart: destination.heart,
    reviews: destination.reviews,
    averageRating: destination.averageRating,
    overview: destination.overview,
    address: destination.address,
    toursAndExperiences: destination.toursAndExperiences,
    numberOfTours: destination.numberOfTours,
    gallery: destination.gallery,
    comments: destination.comments,
    openNow: destination.openNow,
    suggestedDuration: destination.suggestedDuration,
    duration: destination.duration
  })

  destinationInstance.save((err, destinationInstance) => {
    if (err) {
        return console.error(err);
    };
  });
};

let getData = (id) => {
    return new Promise((resolve, reject) => {
      Destination.find({id: id}).exec((err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    })
  }


module.exports = { save, getData };