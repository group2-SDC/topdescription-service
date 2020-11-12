const express = require('express');
const bodyParser = require('body-parser');
const createDestinationObject = require('../database/seedingScript.js')
const getData = require('../database/index.js');
const app = express();
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/seedData', (req, res) => {
    console.log(req.body)
    createDestinationObject()
    res.end();
})

app.get('/getData', (req, res) => {
    getData()
      .then((response) => {
          console.log(response)
          res.send(response);
      }) 
      .catch((error) => {
          console.log(error)
          res.send(error);
      })
})

app.listen(port, () => console.log(`listening on port ${port}`)); 