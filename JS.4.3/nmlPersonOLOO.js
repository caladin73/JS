/*globals document, window */
'use strict';

/**
 * OOLO Person object
 */

let Person = {
    init: function (name, age, weight, sex) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.sex = sex;
    },

    getName: function () {
        return this.name;
    },

    setName: function (name) {
        this.name = name;
    },

    setWeight: function (w) {
        this.weight = w;
    },

    toString: function () {
        let s = 'I am a person: My name is: ' + this.getName();
        if (this.sex !== 'F') {
            s += ', age: ' + this.age;
            s += ', weight: ' + this.weight;
        }
        return s;
    }
};