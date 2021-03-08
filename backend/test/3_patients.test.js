process.env.NODE_ENV = 'test'
const Patient = require('../models/patient.model');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Patients', () => {
    before((done) => {  //Before each test we empty the database
        Patient.deleteMany({}, (err) => {
            if (err) done(err);
            done();
        });
    });

    //Test GET for Patients
    describe('/GET Patient', () => {
        it('GET all the Patients', (done) => {
            chai.request(server)
                .get('/patients')
                .end((err, res) => {
                    if (err) {
                        done(err)
                    }
                    expect(res).to.have.status(200)
                    expect(res.body).to.eql([])
                    done()
                });
        });
    });

    //Test for /POST Patient/add
    describe('/POST Patient', () => {
        it('POST a Patient at patients/add', (done) => {
            const newPatient = new Patient({
                googleId: "testGoogleId"
            });

            chai.request(server)
                .post('/patients/add')
                .send(newPatient)
                .end((err, res) => {
                    if (err) {
                        done(err)
                    }
                    expect(res).to.have.status(200)
                    done();
                });
        });
    });

    describe('/PUT', () => {
        it('PUT request to update the data', (done) => {
            chai.request(server)
            .put('/patients/update')
            .send({
                googleId: "testGoogleId",
                phoneNumber: "test37438243280432432432",
                name: "testName",
                picture: "testPicture"
            })
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done(err)
                }
                expect(res).to.have.status(200)
                done();
            });
        })
    })

    //Test for /POST Patient/add
    describe('/POST Patient', () => {
        it('POST a Patient at patients/add with a duplicate key', (done) => {
            const newPatient = new Patient({
                googleId: "testGoogleId"
            });

            chai.request(server)
                .post('/patients/add')
                .send(newPatient)
                .end((err, res) => {
                    if (err) {
                        // console.log(err);
                        done(err);
                    }
                    expect(res).to.have.status(400);
                    done();
                });
        });
    });

    //Test GET for Patients
    describe('/GET Patient', () => {
        it('GET all the Patients', (done) => {
            chai.request(server)
                .get('/patients')
                .end((err, res) => {
                    if (err) {
                        console.log(err)
                        done(err);
                    }
                    expect(res).to.have.status(200);
                    expect(res.body.length).eql(1);
                    done()
                });
        });
    });
    
    after(function() {
        process.exit();
    })
});