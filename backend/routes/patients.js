const router = require('express').Router();
const Patient = require('../models/patient.model');
const Appointment = require('../models/appointment.model');
const jwt = require('jsonwebtoken');

// To get all the patients
// ** ONLY FOR TESTING **
router.route('/').get((req, res) => {
    Patient.find().then(patients => {
        res.status(200).json(patients);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

// To add a patient
router.route('/add').post((req, res) => {
    const googleId = req.body.googleId;
    const name = req.body.name;
    const picture = req.body.picture;

    const newPatient = new Patient({
        googleId, name, picture
    })

    newPatient.save().then(() => {
        res.status(200).json('Patient added');
    }).catch(err => {
        res.status(400).json(`Error : ${err}`);
    })
})

// To update a patient's phone number
router.route('/update-phone').put((req, res) => {
    const googleId = req.body.googleId;

    Patient.findOne({ googleId: googleId }).then(patient => {
        if (patient) {
            patient.phoneNumber = req.body.phoneNumber;

            patient.save().then(() => {
                res.status(200).json('Patient\'s phone number updated');
            }).catch(err => {
                res.status(400).json({message: `Error : ${err}`});
            });
        }
    })
})

router.route('/google-login').post(async (req, res) => {
    try {
        const tokenId = req.body.tokenId;

        // Decode the jwt
        const decoded = jwt.decode(tokenId, process.env.KEY);
        const googleId = await decoded.sub;

        // Check if the user already exists in the database
        const patient = await Patient.findOne({ googleId: googleId });

        // If the patient is not found
        if(patient === null){
            const { email, name, picture } = decoded;
            const newPatient = new Patient({
                googleId, email, name, picture
            })
            const savedPromise = await newPatient.save();
            if(savedPromise){
                return res.status(200).json({ phoneNumberExists : false });
            }
            else{
                throw savedPromise;
            }
        }

        // If the phone number is not present in the database
        else if(patient.phoneNumber === undefined){
            return res.status(200).json({ phoneNumberExists : false });
        }

        // Patient's phone number already exists in the database
        else{
            return res.status(200).json({ phoneNumberExists : true })
        }
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
})

router.route('/getPatientDetails/:googleId').get(async (req, res) => {
    try {
        const googleId = req.params.googleId;
        const patient = await Patient.findOne({ googleId : googleId });

        if(patient){
            return res.status(200).json(patient);
        }
        else {
            return res.status(201).json({message : "Patient not found!"});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: err});
    }
})

router.route('/appointments').post(async (req, res) => {
    try {
        const googleId = req.body.googleId;
        const appointments = await Appointment.find({patientId : googleId});
        sortedAppointments = appointments.sort((a, b) => {
            console.log(`Date 1 : ${a.date} Time 1 : ${a.slotTime}`)
            console.log(`Date 2 : ${b.date} Time 2 : ${b.slotTime}`)
            d1 = Date.parse(a.date + 'T' + a.slotTime)
            d2 = Date.parse(b.date + 'T' + b.slotTime)
            console.log(d1)
            console.log(d2)
            console.log(d2-d1)
            console.log(new Date("2021"))
            return d2 - d1
        })
        res.status(200).json(sortedAppointments);
    } 
    catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

module.exports = router;