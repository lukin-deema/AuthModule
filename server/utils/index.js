const mongoose = require('mongoose');
const crypto = require("crypto");

function mongooseConnect(){
    mongoose.Promise = require('bluebird');
    mongoose.debug = true;
    mongoose.connect('mongodb://localhost/test', {
        useMongoClient: true
    });
}
mongooseConnect();
const User = mongoose.model('User', mongoose.Schema({ name: String }));



exports.mongooseConnect = mongooseConnect;
exports.modelUser = User;
