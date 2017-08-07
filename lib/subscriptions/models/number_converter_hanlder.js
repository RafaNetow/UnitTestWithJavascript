/**
 * Created by Sequeirios on 06/08/2017.
 */


var NumberConverterHanlder = function () {
    this.RomanToDecimal = function(str1) {

        var num = char_to_int(str1.charAt(0));
        var pre, curr;

        for(var i = 1; i < str1.length; i++){
            curr = char_to_int(str1.charAt(i));
            pre = char_to_int(str1.charAt(i-1));
            if(curr <= pre){
                num += curr;
            } else {
                num = num - pre*2 + curr;
            }
        }

        return num;
    }

    this.DecimalToRoman = function(num) {
        var result = '';
        var decimal = [1000, 500, 100, 50, 10, 5, 1];
        var roman = ["M", "D", "C", "L", "X", "V", "I"];
        for (var i = 0;i<=decimal.length;i++) {
            while (num%decimal[i] < num) {
                result += roman[i];
                num -= decimal[i];
            }
        }
        return result;
    }


}



char_to_int = function(c) {
    switch (c) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}






module.exports = NumberConverterHanlder;