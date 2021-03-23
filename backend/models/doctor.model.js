const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slotSchema = new Schema({
    time : {
        type: String,
    },
    isBooked : {
        type: Boolean,
        default: false
    }
})

const dateSchedule = new Schema({
    date : {
        type: String
    },
    slots : [slotSchema]
})

const doctorSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    email : {
        type: String
    },
    phoneNumber: {
        type: String
    },
    specialization: {
        type: String
    },
    feesPerSession: {
        type: String
    },
    dates : [dateSchedule]
});

const Doctor = mongoose.model('Doctor', doctorSchema);
const Slot = mongoose.model('Slot', slotSchema);
const DateSchedule = mongoose.model('DateSchedule', dateSchedule);

module.exports = {
    Doctor,
    Slot,
    DateSchedule
};