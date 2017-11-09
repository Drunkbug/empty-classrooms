// const path = require('path');
// const express = require('express');
// const mongoose = require('mongoose');
// const keys = require('./config/keys');
// const bodyParser = require('body-parser');
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import keys from './config/keys';
import bodyParser from 'body-parser';
import buildingService from './services/buildingService';
import buildingModel from './models/Building/buildingModel';

let connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
if(keys.username) {
    const username = keys.username;
    const password = keys.password;
    connectionString = 'mongodb://'+username+':'+password;
    connectionString += '@ds249605.mlab.com:49605/heroku_bpwwnln2';
}

mongoose.connect(connectionString);

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const publicPath = path.join(__dirname, '..', 'public');


app.use(express.static(publicPath));
// const buildingModel = require('./models/Building/buildingModel');
// require('./services/buildingService')(app, buildingModel);
buildingService(app, buildingModel);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);