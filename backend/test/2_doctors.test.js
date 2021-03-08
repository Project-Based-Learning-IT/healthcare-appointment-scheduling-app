process.env.NODE_ENV = 'test'
const Doctor = require('../models/doctor.model');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Doctors', () => {
    before((done) => {  //Before each test we empty the database
        Doctor.deleteMany({}, (err) => {
            if (err) done(err);
            done();
        });
    });

    //Test GET for Doctors
    describe('/GET Doctor', () => {
        it('GET all the Doctors', (done) => {
            chai.request(server)
                .get('/doctors')
                .end((err, res) => {
                    if (err) {
                        done(err)
                    }
                    expect(res).to.have.status(200);
                    expect(res.body).to.eql([]);
                    done();
                });
        });
    });

    //Test for /POST Doctor/add
    describe('/POST Doctor', () => {
        it('POST a Doctor at doctors/add', (done) => {
            const newDoctor = new Doctor({
                username: "testUsername"
            });

            chai.request(server)
                .post('/doctors/add')
                .send(newDoctor)
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
        it('PUT request to update the doctor data', (done) => {
            chai.request(server)
            .put('/doctors/update')
            .send({
                username: "testUsername",
                phoneNumber: "test37438243280432432432",
                specialization: "testSpecialization",
                feesPerSession: "testfeesPerSessionTest"
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

    // Test to add a doctor with duplicate key
    describe('/POST Doctor', () => {
        it('POST a doctor at doctors/add with a duplicate key', (done) => {
            const newDoctor = new Doctor({
                username: "testUsername"
            });

            chai.request(server)
                .post('/doctors/add')
                .send(newDoctor)
                .end((err, res) => {
                    if (err) {
                        done(err)
                    }
                    expect(res).to.have.status(400)
                    done();
                });
        });
    });

    //Test GET for Doctors
    describe('/GET Doctor', () => {
        it('GET all the Doctors', (done) => {
            chai.request(server)
                .get('/doctors')
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
    
});