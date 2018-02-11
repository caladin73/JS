/*globals window, document */
'use strict';

/*
 * adactio110.js
 */

let create_canvas = function () {
    var x = document.getElementById("myForm").elements[0].value;
    var y = document.getElementById("myForm").elements[1].value;

        document.getElementById("demo").innerHTML = "Room" + "<br>" +
            "<canvas id=\"room\" width=\"" + x + "\" height=\"" + y + "\"\n" +
            "    style=\"outline: 1px solid magenta;\">\n" +
            "</canvas>" + "\n" +
            "\n" +
            "<canvas id=\"toolbox\" width=\"400\" height=\"400\"\n" +
            "    style=\"outline: 1px solid magenta;\">\n" +
            "</canvas>"

    let canvas = $('toolbox');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "blue";         // fill color to 088
    ctx.fillRect(20, 10, 100, 100);  // fill rectangle

    ctx.fillStyle = "red";         // fill color to 088
    ctx.fillRect(200, 10, 80, 80);  // fill rectangle

    ctx.fillStyle = "green";         // fill color to 088
    ctx.fillRect(20, 150, 60, 60);  // fill rectangle

    ctx.fillStyle = "pink";         // fill color to 088
    ctx.fillRect(200, 150, 40, 40);  // fill rectangle

    ctx.beginPath();                // begin new path
    ctx.arc(80, 300, 50, 0, Math.PI, true);
    ctx.fillStyle = "yellow";         // set fill color
    ctx.fill();                     // fill the path
    ctx.stroke();                   // draw circumference
};