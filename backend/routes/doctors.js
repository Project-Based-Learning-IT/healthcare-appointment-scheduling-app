const router = require('express').Router();
let Doctor = require('../models/doctor.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// To get all the doctors
// **ONLY FOR TESTING**
router.route('/').get((req, res) => {
    Doctor.find().then(doctors => {
        res.json(doctors);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

// To add a doctor
router.route('/add').post((req, res) => {
    const username = req.body.username; // Required.. can't be undefined
    const password = req.body.password;
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const specialization = req.body.specialization;
    const feesPerSession = req.body.feesPerSession;

    const newDoctor = new Doctor({
        username, password, name, phoneNumber, specialization, feesPerSession
    })

    newDoctor.save().then(() => {
        res.json('Doctor added');
        // console.log(`${newDoctor} added!`)
    }).catch(err => {
        res.status(400).json(`Error : ${err}`);
        // console.log(err);
    })
})

// To update a doctor
router.route('/update').put((req, res) => {
    const username = req.body.username; // Required.. can't be undefined

    Doctor.findOne({ username: req.body.username }).then(doctor => {
        if (doctor) {
            doctor.name = req.body.name;
            doctor.phoneNumber = req.body.phoneNumber;
            doctor.specialization = req.body.specialization;
            doctor.feesPerSession = req.body.feesPerSession;

            doctor.save().then(() => {
                res.json('Doctor updated');
                // console.log(`${doctor} updated!`)
            }).catch(err => {
                res.status(400).json(`Error : ${err}`);
                // console.log(err);
            })
        }
    })
})

// Doctor login
router.route('/login/').post(async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const doctor = await Doctor.findOne(
            { 
                username: username,
                password: password
            }
        );
        
        console.log(doctor)

        if (doctor === null) {
            return res.status(201).json({ "message": "wrong username or password" });
        }

        // Doctor found... return the token to the client side
        const token = jwt.sign(
            JSON.stringify(doctor),
            process.env.KEY, 
            {
                algorithm: process.env.ALGORITHM
            }
        )
        return res.status(200).json({ token: token.toString() });

    } catch (err) {
        console.log(err)
        return res.status(400).json(err);
    }
})

module.exports = router;