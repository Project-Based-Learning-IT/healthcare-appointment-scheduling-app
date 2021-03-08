const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    picture: {
        type: String
    },
    phoneNumber: {
        type: String
    }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;