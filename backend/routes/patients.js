const router = require('express').Router();
const Patient = require('../models/patient.model');
const Appointment = require('../models/appointment.model');
const jwt = require('jsonwebtoken');
const stripe =require("stripe")("sk_test_51IabQNSCj4BydkZ38AsoDragCM19yaMzGyBVng5KUZnCNrxCJuj308HmdAvoRcUEe2PEdoORMosOaRz1Wl8UX0Gt00FCuSwYpz")
const { v4: uuidv4 } = require('uuid');

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
                res.status(400).json({ message: `Error : ${err}` });
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
        if (patient === null) {
            const { email, name, picture } = decoded;
            const newPatient = new Patient({
                googleId, email, name, picture
            })
            const savedPromise = await newPatient.save();
            if (savedPromise) {
                return res.status(200).json({ phoneNumberExists: false });
            }
            else {
                throw savedPromise;
            }
        }

        // If the phone number is not present in the database
        else if (patient.phoneNumber === undefined) {
            return res.status(200).json({ phoneNumberExists: false });
        }

        // Patient's phone number already exists in the database
        else {
            return res.status(200).json({ phoneNumberExists: true })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
})

router.route('/getPatientDetails/:googleId').get(async (req, res) => {
    try {
        const googleId = req.params.googleId;
        const patient = await Patient.findOne({ googleId: googleId });

        if (patient) {
            return res.status(200).json(patient);
        }
        else {
            return res.status(201).json({ message: "Patient not found!" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
})

router.route('/previous-appointments').post(async (req, res) => {
    try {
        const googleId = req.body.googleId;
        const appointments = await Appointment.find({ patientId: googleId });

        // Get current dateTime
        const date = new Date()
        let currDateTime = date.getFullYear().toString()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        currDateTime += month < 10 ?  ('-0' + month.toString()) : '-' + month.toString()
        currDateTime += day < 10 ?  ('-0' + day.toString()) : '-' + day.toString()
        currDateTime += hour < 10 ?  ('T0' + hour.toString()) : 'T' + hour.toString()
        currDateTime += minutes < 10 ?  (':0' + minutes.toString()) : ':' + minutes.toString()
        currDateTime += seconds < 10 ?  (':0' + seconds.toString()) : ':' + seconds.toString()

        const filteredAppointments = appointments.filter((appointment) => {
            return Date.parse(currDateTime) >= Date.parse(appointment.date + 'T' + appointment.slotTime)
        })

        const sortedAppointments = filteredAppointments.sort((a, b) => {
            return Date.parse(b.date + 'T' + b.slotTime) - Date.parse(a.date + 'T' + a.slotTime)
        })

        res.status(200).json(sortedAppointments);
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

router.route('/upcoming-appointments').post(async (req, res) => {
    try {
        const googleId = req.body.googleId;
        const appointments = await Appointment.find({ patientId: googleId });

        // Get current dateTime
        const date = new Date()
        let currDateTime = date.getFullYear().toString()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        currDateTime += month < 10 ?  ('-0' + month.toString()) : '-' + month.toString()
        currDateTime += day < 10 ?  ('-0' + day.toString()) : '-' + day.toString()
        currDateTime += hour < 10 ?  ('T0' + hour.toString()) : 'T' + hour.toString()
        currDateTime += minutes < 10 ?  (':0' + minutes.toString()) : ':' + minutes.toString()
        currDateTime += seconds < 10 ?  (':0' + seconds.toString()) : ':' + seconds.toString()

        const filteredAppointments = appointments.filter((appointment) => {
            return Date.parse(currDateTime) <= Date.parse(appointment.date + 'T' + appointment.slotTime)
        })

        const sortedAppointments = filteredAppointments.sort((a, b) => {
            return Date.parse(a.date + 'T' + a.slotTime) - Date.parse(b.date + 'T' + b.slotTime)
        })

        res.status(200).json(sortedAppointments);
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

router.route("/payment").post(async (req,res)=>{
    const {finalBalnce, token}=req.body;
    // console.log(product);
  const idempotencyKey = uuidv4();

  return stripe.customers
  .create({
    email: token.email,
    source: token.id
  })
  .then(customer => {
    stripe.charges
      .create(
        {
          amount: finalBalnce * 100,
          currency: 'usd',
          customer: customer.id,
          receipt_email: token.email,
          description: `Booked Appointement Successfully`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotencyKey
        }
      )
      .then(result => res.status(200).json(result))
      .catch(err => console.log(err));
  })
  .catch(console.log("FAILED"));
})


module.exports = router;