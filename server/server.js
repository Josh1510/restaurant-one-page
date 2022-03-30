const express = require('express');
const bodyParser = require('body-parser');
//const multer = require('multer');

// create express instance
const app = express();
const port = process.env.PORT || 5000;

//file system helper
const fs = require('fs');

//bodyParser settings to allow json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

//launches server on port 5000
const server = app.listen(port, () => {
  console.log('listening on port %s...', server.address().port);
});
