const express = require('express');
const bodyParser = require('body-parser');
const createDestinationObject = require('../database/seedingScript.js')
const dbHelpers = require('../database/index.js');
const app = express();
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

app.use(bodyParser.json());

app.use('/:listing_id', express.static('public'));

app.get('/api/listings/:listing_id/carousel', (req, res) => {
    console.log(req.params.listing_id)
	dbHelpers.getData(req.params.listing_id)
     .then((response) => {
          res.send(response);
      }) 
      .catch((error) => {
          res.send(404);
    })
})

app.listen(port, () => console.log(`listening on port ${port}`)); 
