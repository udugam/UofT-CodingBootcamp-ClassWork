var expect = require("chai").expect;
var calculateTax = require("../tax");

describe("calculateTax", function() {
    it("should add appropriate tax to an integer", function() {
        var amount = 4;

        var result = calculateTax(amount);

        expect(result).to.equal(4.32);
    });

    it("should add appropriate tax to a decimal", function() {
        var amount = 5.22;
    
        var result = calculateTax(amount);
    
        expect(result).to.equal(5.64);
    });

    it("should throw an error if the input is not a number", function() {
        var call = function() {
            calculateTax("potato")
        };
    
        expect(call).to.throw(Error, "Parameter 'price' is required and must be a number.");
    });
});


