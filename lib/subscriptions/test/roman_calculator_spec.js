/**
 * Created by Sequeirios on 05/08/2017.
 */
var assert = require("assert");
var RomanCalculator = require("../models/roman_calculator");

    describe("Roman Calculator", function () {
        var romanCalc = new RomanCalculator();

        describe("When is a sum with input I+I", function () {
            it("Should return II", function () {
              var result = romanCalc.AddRomanNumerals("I","I");
              assert.deepEqual(result,"II");
            })
        });

        describe("When is a sub with input II-I",function () {
            it("Should return I", function () {
                var result = romanCalc.SubRomanNumerals("II","I");
                    assert.deepEqual(result,"I");

            })
        });

        describe("When is a mult with input II*III", function () {
            it("Should return VI", function () {
                var result = romanCalc.MulRomanNumerals("II","III");
                    assert.deepEqual(result,"VI");
            })
        });

        describe("When is a div with input III/III",function () {
            it("Should return I", function () {
                var result = romanCalc.DivRomanNumerals("III","III");
                    assert.deepEqual(result,'I');

            })
        });

        describe("When input is null in function DivRomanNumerals", function () {
            it("Should return -1", function () {
                var result = romanCalc.DivRomanNumerals(null,null);
                    assert.deepEqual(result,-1);
            })
        })




    });