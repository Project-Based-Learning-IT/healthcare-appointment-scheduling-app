const router = require('express').Router();
let Patient = require('../models/patient.model');

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
        // console.log(`\t${newPatient} added!`)
    }).catch(err => {
        res.status(400).json(`Error : ${err}`);
        // console.log(err);
    })
})

// To update a patient
router.route('/update').put((req, res) => {
    const googleId = req.body.googleId;

    Patient.findOne({ googleId: googleId }).then(patient => {
        if (patient) {
            patient.name = req.body.name;
            patient.picture = req.body.picture;
            patient.phoneNumber = req.body.phoneNumber;

            patient.save().then(() => {
                res.json('Patient updated');
                // console.log(`${patient} updated!`)
            }).catch(err => {
                res.status(400).json(`Error : ${err}`);
                // console.log(err);
            });
        }
    })
})

module.exports = router;