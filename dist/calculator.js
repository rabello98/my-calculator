(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, (global.calculator = global.calculator || {}, global.calculator.bundle = factory()));
}(this, function () { 'use strict';

    var calculator = {
        sum (firstNum, secondNum) {
            return firstNum + secondNum
        },

        subtract (firstNum, secondNum) {
            return firstNum - secondNum
        }
    };

    return calculator;

}));
