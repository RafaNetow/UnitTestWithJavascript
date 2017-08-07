/**
 * Created by Sequeirios on 06/08/2017.
 */
var assert = require("assert");
var numberConvertHandler = require("../models/number_converter_hanlder")

    describe("Number Convert Handler", function () {
        var handerConvert = new numberConvertHandler();
        describe("When input is null and use function DecimalToRoman", function () {
            it("should return -1", function () {
             var result = handerConvert.DecimalToRoman(null);
                assert.equal(result,-1)
            })
        });

        describe("When input is null and use function RomanToDecimal",function () {
            it("should return -1", function () {
                var result = handerConvert.RomanToDecimal(null);
                    assert.equal(result,-1);
            });
        });
        
        describe("When input is VI and use the function RomanToDecimal", function () {
            it("should return 6", function () {
                var result = handerConvert.RomanToDecimal("VI");
                    assert.equal(result, 6);

            })
        })



    });