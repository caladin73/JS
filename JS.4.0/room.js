/*globals document, window */
'use strict';

let poly = function () {
    let canvas = $('room');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();        // new path
        ctx.moveTo(50, 200);    // goto coordinate in canvas
        ctx.lineTo(150, 50);    // line to coordinate
        ctx.lineTo(180, 150);   // another line to coord
        ctx.lineTo(50, 200);    // close poly
        ctx.fillStyle = 'silver';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 10;
        ctx.fill();             // fills poly
        ctx.closePath();        // close path
        ctx.stroke();           // draws lines
    }
}

window.addEventListener('load', poly);