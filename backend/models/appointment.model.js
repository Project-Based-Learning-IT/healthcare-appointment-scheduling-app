const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    doctorId : {
        required: true,
        type: String
    },
    dateId : {
        required: true,
        type: String
    },
    slotId : {
        required: true,
        type: String
    },
    patientId : {
        required: true,
        type: String
    },
    date : {
        type: String
    },
    slotTime : {
        type: String
    },
    doctorName : {
        type : String
    },
    patientName : {
        type : String
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;