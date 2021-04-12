const router = require("express").Router();
const doctors = require("../models/doctor.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Appointment = require("../models/appointment.model");
const { Doctor, Slot, DateSchedule } = doctors;

function createDate(date) {
  return new DateSchedule({
    date: date,
    slots: [
      new Slot({
        time: "09:00:00",
        isBooked: false,
      }),
      new Slot({
        time: "12:00:00",
        isBooked: false,
      }),
      new Slot({
        time: "15:00:00",
        isBooked: false,
      }),
    ],
  });
}

// To get all the doctors
// **ONLY FOR TESTING**
router.route("/").get((req, res) => {
  Doctor.find()
    .then((doctors) => {
      res.json(doctors);
    })
    .catch((err) => {
      res.status(400).json(`Error : ${err}`);
    });
});

// To add a doctor
router.route("/add").post((req, res) => {
  const username = req.body.username; // Required.. can't be undefined
  const password = req.body.password;
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const specialization = req.body.specialization;
  const feesPerSession = req.body.feesPerSession;

  const newDoctor = new Doctor({
    username,
    password,
    name,
    phoneNumber,
    specialization,
    feesPerSession,
  });

  newDoctor
    .save()
    .then(() => {
      res.json("Doctor added");
      // console.log(`${newDoctor} added!`)
    })
    .catch((err) => {
      res.status(400).json(`Error : ${err}`);
      // console.log(err);
    });
});

// To update a doctor
router.route("/update").put((req, res) => {
  const username = req.body.username; // Required.. can't be undefined

  Doctor.findOne({ username: req.body.username }).then((doctor) => {
    if (doctor) {
      doctor.name = req.body.name;
      doctor.phoneNumber = req.body.phoneNumber;
      doctor.specialization = req.body.specialization;
      doctor.feesPerSession = req.body.feesPerSession;

      doctor
        .save()
        .then(() => {
          res.json("Doctor updated");
          // console.log(`${doctor} updated!`)
        })
        .catch((err) => {
          res.status(400).json(`Error : ${err}`);
          // console.log(err);
        });
    }
  });
});

// Doctor login
router.route("/login").post(async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const doctor = await Doctor.findOne({
      username: username,
      password: password,
    });

    console.log(doctor);

    if (doctor === null) {
      return res.status(201).json({ message: "wrong username or password" });
    }

    // Doctor found... return the token to the client side
    const token = jwt.sign(JSON.stringify(doctor), process.env.KEY, {
      algorithm: process.env.ALGORITHM,
    });
    return res.status(200).json({ token: token.toString() });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

// To get the slots available for the date
router.route("/get-slots").post(async (req, res) => {
  try {
    const id = req.body.doctorId; // Doctor's id
    const date = req.body.date; // Date to book

    const doctor = await Doctor.findOne({ _id: id });

    // Doctor not found
    if (doctor === null) {
      console.log("Doctor not found in the database!");
      return res.status(201).json({
        message: "Doctor not found in the database!",
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
    );

    if (updatedDoctor) {
      return res.status(200).json(updatedDoctor.dates[oldLength]);
    } else {
      const err = { err: "an error occurred!" };
      throw err;
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err,
    });
  }
});

router.route("/book-slot").post((req, res) => {
  const patientId = req.body.googleId; // Patient's google id
  const patientName = req.body.patientName; // Patient's name
  const doctorId = req.body.doctorId; // Doctor's id
  const slotId = req.body.slotId; // Id of that particular slot
  const dateId = req.body.dateId; // Id of that particular date

  Doctor.findOne({ _id: doctorId }).then((doctor) => {
    const date = doctor.dates.id(dateId);
    const slot = date.slots.id(slotId);
    slot.isBooked = true;
    doctor
      .save()
      .then(() => {
        // Create an entry in the appointment database
        const newAppointment = new Appointment({
          doctorId,
          dateId,
          slotId,
          patientId,
          date: date.date,
          slotTime: slot.time,
          doctorName: doctor.name,
          doctorEmail: doctor.email,
          patientName: patientName,
        });

        newAppointment
          .save()
          .then((appointment) => {
            return res.status(200).json(appointment);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          message: `An error occurred : ${err}`,
        });
      });
  });
});

router.route("/appointments").post(async (req, res) => {
  try {
    const doctorId = req.body.doctorId;
    const appointments = await Appointment.find({
      doctorId: doctorId,
    });
    // res.status(200).json(appointments);
    const sortedAppointments = appointments.sort((a, b) => {
      return (
        Date.parse(b.date + "T" + b.slotTime) -
        Date.parse(a.date + "T" + a.slotTime)
      );
    });

    res.status(200).json(sortedAppointments);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
