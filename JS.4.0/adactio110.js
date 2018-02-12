/*globals window, document */
'use strict';

/*
 * adactio110.js
 */

let create_canvas = function () {

    var i = document.getElementById("room").style.width;

    if ( i == 0) {

        var x = document.getElementById("myForm").elements[0].value;
        var y = document.getElementById("myForm").elements[1].value;

        document.getElementById("room").style.width = x + "px";
        document.getElementById("room").style.height = y + "px";

        document.getElementById("toolbox").style.width = 400 + "px";
        document.getElementById("toolbox").style.height = 400 + "px";

    }


/*
        let mycv = Object.create(Canvas);
        mycv.init('toolbox');
        mycv.canvas.addEventListener('click', hittest);

        let shape1 = Object.create(Shape);
        shape1.init(mycv, 20, 10, 120, 40, 'blue');

        shapes.push(shape1);
        repeater(mycv, shapes);





*/
    /*
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

    */
};