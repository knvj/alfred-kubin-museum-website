const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://kniewski:ex.kniewski@cluster0.thzv02d.mongodb.net/mern-events'


mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('error', () => {
    console.log("MongoDB connection failed")
})

connection.on('connected', () => {
    console.log("MongoDB connection successful");
})

module.exports = mongoose;
