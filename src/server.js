// BASIC SERVER

// import express library into the project
const express = require('express');

// instantiate express inside a variable called app
const app = express();

// import nodemailer
const nodemailer = require("nodemailer");

// import mailgun (just in case)
// const mailGun = require('nodemailer-mailgun-transport');

// set up the port
const port = 5000;

// MIDDLEWARE
app.use(express.static('public'));

// Keep up the images

// ROUTES
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// tell app to listen
    // pass in the port at which you want the server to run
        // log a message to the console that the server is running
app.listen(port, () => {
    console.log(`Success! CourDevelops Portfolio is running on port: ${port}`);
})