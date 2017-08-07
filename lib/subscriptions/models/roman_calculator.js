/**
 * Created by Sequeirios on 05/08/2017.
 */
var HanlderConvert = require("../models/number_converter_hanlder")

var RomanCalculator =  function (args) {
    var hanlder = new HanlderConvert();
    args || (args = {})

    this.AddRomanNumerals = function (a, b) {
        return hanlder.DecimalToRoman(hanlder.RomanToDecimal(a)+ hanlder.RomanToDecimal(b));
    };


    this.SubRomanNumerals = function (a,b) {
        return hanlder.DecimalToRoman(hanlder.RomanToDecimal(a)- hanlder.RomanToDecimal(b));
    }

    this.MulRomanNumerals = function (a,b) {
        return hanlder.DecimalToRoman(hanlder.RomanToDecimal(a)* hanlder.RomanToDecimal(b));
    }
    
    this.DivRomanNumerals = function (a,b) {
        if(a === null || b === null)
            return -1;
        return hanlder.DecimalToRoman(hanlder.RomanToDecimal(a)/ hanlder.RomanToDecimal(b));
    }

    


};

module.exports = RomanCalculator;