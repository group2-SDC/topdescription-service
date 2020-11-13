const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird');

var db = mongoose.connection;

let destinationSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: Number, required: true, unique: true
  },
  name: String,
  heart: Boolean,
  reviews: Number,
  averageRating: Number,
  overview: String,
  address: String,
  toursAndExperiences: [String],
  gallery: [String]

});

let Destination = mongoose.model('destination', destinationSchema);

let save = (destination) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let destinationInstance = new Destination({
    id: destination.id,
    name: destination.name,
    heart: destination.heart,
    reviews: destination.reviews,
    averageRating: destination.averageRating,
    overview: destination.overview,
    address: destination.address,
    toursAndExperiences: destination.toursAndExperiences,
    gallery: destination.gallery
  })

  destinationInstance.save((err, destinationInstance) => {
    if (err) {
        return console.error(err);
    };
  });
};

let getData = () => {
    return new Promise((resolve, reject) => {
      Destination.find({}).exec((err, data) => {
        if(err){
          reject(err)
        } else {
          console.log(data);
          resolve(data);
        }
      })
    })
  }


module.exports = { save, getData }