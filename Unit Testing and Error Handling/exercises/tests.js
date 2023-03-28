let { Repository }  = require("./index.js");
let { expect } = require('chai');

describe("Repository function tests", function () {
    describe("Initialization", function () {
        it("Should add props property on init", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            expect(repository).to.have.property('props');
            expect(repository).to.deep.equal(properties);


        });
    });
    // TODO: …
});
