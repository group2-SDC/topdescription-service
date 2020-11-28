const express = require('express');
const bodyParser = require('body-parser');
const createDestinationObject = require('../database/seedingScript.js')
const dbHelpers = require('../database/index.js');
const app = express();
const port = 3000;
const morgan = require('morgan')
const compression = require('compression')
const path = require('path')

app.use(morgan('dev'));
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use('/:listing_id', express.static(PUBLIC_DIR));

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
