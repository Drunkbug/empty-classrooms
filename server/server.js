const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

let connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
if(keys.username) {
    const username = keys.username;
    const password = keys.password;
    connectionString = 'mongodb://'+username+':'+password;
    connectionString += '@ds249605.mlab.com:49605/heroku_bpwwnln2';
}
mongoose.connect(connectionString);
const app = express();
const publicPath = path.join(__dirname, '..', 'public');


const buildingModel = require('./models/Building/building.model.server');
require('./services/building.service.server')(app, buildingModel);

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);