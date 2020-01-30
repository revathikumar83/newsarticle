var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require('aylien_textapi');
const app = express()

const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.use(express.static('dist'))
console.log(__dirname)



const textapi = new aylien({
    application_id: process.env.AppId,
    application_key: process.env.APIkey,
  });
  

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse)
})
app.post('/testing', async (req, res, next) => {
    console.log(req.body);
    try {
      var data = textapi.sentiment({
        //'text': 'John is a very good football player!'
        'text': req.body.text
        
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      });
      //res.send(mockAPIResponse)
    } catch(error) {
      // Passes errors into the handler
      return next(error)
    }
    //res.send(returnVal);
  })

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})