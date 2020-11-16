const express = require('express');
const bodyParser = require('body-parser');
const createDestinationObject = require('../database/seedingScript.js')
const dbHelpers = require('../database/index.js');
const app = express();
const port = 3010;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/getData/:id', (req, res) => {
    dbHelpers.getData(req.params.id)
      .then((response) => {
          console.log('from server ===> ', response)
          res.send(response);
      }) 
      .catch((error) => {
          res.send(404);
    })
})

app.listen(port, () => console.log(`listening on port ${port}`)); 