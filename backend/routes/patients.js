const router = require('express').Router();
const Patient = require('../models/patient.model');
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
                res.json('Patient\'s phone number updated');
            }).catch(err => {
                res.status(400).json(`Error : ${err}`);
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
        
        // If the patient is not found or the phone number is not present in the database
        if(patient === null || patient.phoneNumber === null){
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

module.exports = router;