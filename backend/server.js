const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const patientsRouter = require('./routes/patients');
const doctorsRotuer = require('./routes/doctors');
require('dotenv').config();

app.use(express.json());
app.use(cors(
    {
        origin: "*", // allow the server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    }
));

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRotuer);

const port = process.env.PORT || 5000;
let uri = '';
process.env.NODE_ENV === 'test' ? uri = process.env.ATLAS_URI_TEST : uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
    if(!err){
        console.log("Connection to database successful!");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`NODE_ENV = ${process.env.NODE_ENV}`)
})

app.get('/', (req, res) => {
    res.status(200).json("Hello");
})

module.exports = app;