/*globals document, window */
'use strict';

/**
 * OOLO Tunes object
 */

let Tune = {
    init(title, composer, year, performers) {
        this.title = title;
        this.composer = composer;
        this.year = year;
        this.performers = performers;
    },

    getTitle() {
        return this.title;
    },

    setTitle(title) {
        this.title = title;
    },

    getComposer() {
        return this.composer;
    },

    setComposer(composer) {
        this.composer = composer;
    },

    getYear() {
        return this.year;
    },

    setYear(year) {
        this.year = year;
    },

    getPerformers() {
        return this.performers;
    },

    setPerformers(performers) {
        this.performers = performers;
    }
};