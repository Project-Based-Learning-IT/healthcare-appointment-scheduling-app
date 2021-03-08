process.env.NODE_ENV = 'test'

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let expect = chai.expect;

chai.use(chaiHttp);

describe('Check if the server is up', function () {
    it('GET /', function (done) {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                if (err) {
                    // console.log(err)
                    done(err)
                }
                expect(res).to.have.status(200)
                done()
            });
    })
})