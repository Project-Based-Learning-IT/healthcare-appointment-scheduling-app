const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passsword: {
        type: String,
        required: true
    },
    name: {
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
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;