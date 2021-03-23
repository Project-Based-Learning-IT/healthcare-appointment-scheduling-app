const router = require('express').Router();
const doctors = require('../models/doctor.model');
const jwt = require('jsonwebtoken');
const { update } = require('../models/patient.model');
require('dotenv').config();

const { Doctor, Slot, DateSchedule } = doctors;

function createDate(date) {
    return new DateSchedule({
        date: date,
        slots: [
            new Slot({
                time: "09:00:00",
                isBooked: false
            }),
            new Slot({
                time: "12:00:00",
                isBooked: false
            }),
            new Slot({
                time: "15:00:00",
                isBooked: false
            }),
        ]
    })
}

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

// To get the slots available for the date
router.route('/get-slots').post(async (req, res) => {
    try {
        const username = req.body.username;
        const date = req.body.date;

        const doctor = await Doctor.findOne({ username: username });

        // Doctor not found
        if (doctor === null) {
            console.log("Doctor not found in the database!");
            return res.status(201).json({
                message: "Doctor not found in the database!"
            });
        }

        // Doctor found
        // Find the date
        let count = 0;
        for (const i of doctor.dates) {
            if (i.date === date) {
                return res.status(200).json(i);
            }
            count++;
        }

        const oldLength = count;

        // Add new slots if date not found in the db
        const dateSchedule = createDate(date);
        const updatedDoctor = await Doctor.findOneAndUpdate(
            { _id: doctor._id },
            { $push: { dates: dateSchedule } },
            { new: true }
        )

        if (updatedDoctor) {
            return res.status(200).json(updatedDoctor.dates[oldLength]);
        } else {
            const err = { err: "an error occurred!" };
            throw err;
        }
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({
            message: err
        })
    }
})

module.exports = router;