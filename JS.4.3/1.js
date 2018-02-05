/*globals document, window */
'use strict';

/**
 * OOLO fraction rational object
 */

let rational = {
    init: function (numerator,  denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    },

    getNumerator: function () {
        return this.numerator;
    },

    setNumerator: function (numerator) {
        this.numerator = numerator;
    },

    getDenominator: function () {
        return this.denominator;
    },

    setDenominator: function (denominator) {
        this.denominator = denominator;
    },

    toString: function () {
        let s = this.getNumerator() + "/" + this.getDenominator();
        return s;
    }
};