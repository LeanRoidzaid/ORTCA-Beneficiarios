let chai = require("chai");
let chaihttp = require("chai-http");
//incluir el server.js para que mocha pueda ejecutar las pruebas
let server = require("../src/server");
let should = chai.should();
let token="";

chai.use(chaihttp);

describe("lista todos los beneficiarios: ", function () {
    it("Probamos la busqueda de todos los beneficiarios", (done) => {
        chai.request(server)
            .get("/api/beneficiarios/all/")
            .end((err, res) => {
                res.body.should.be.a('Object');

                chai.assert.equal(res.status, 200, "No devuelve status code 200");
                //chai.assert.notEqual(res.body.token, null, "No devolvio Token");
                res.body.should.be.a("Object");
                //token = res.body.token;        
                console.log("devolvio todos los beneficiarios: " + res.body);
                done();
            });
    });
});