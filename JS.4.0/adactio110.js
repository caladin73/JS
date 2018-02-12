/*globals window, document */
'use strict';

/*
 * adactio110.js
 */

function create_canvas () {

    var x = document.getElementById("height").value;
    var y = document.getElementById("width").value;

    document.getElementById("room").style.width = x + "px";
    document.getElementById("room").style.height = y + "px";

    document.getElementById("toolbox").style.width = 400 + "px";
    document.getElementById("toolbox").style.height = 400 + "px";

    let initialize = function () {
        // create canvas object
        let mycv0 = Object.create(Canvas);
        mycv0.init('room');
        let mycv1 = Object.create(Canvas);
        mycv1.init('toolbox');
        mycv1.prep();
        let shape1 = Object.create(Shape);
        shape1.init(mycv1, 20, 20, 140, 140, 'blue');
        var shape2 = Object.create(Shape);
        shape2.init(mycv1, 240, 20, 120, 120, 'green');
        var shape3 = Object.create(Shape);
        shape3.init(mycv1, 240, 180, 80, 80, 'red');
        var shape4 = Object.create(Shape);
        shape4.init(mycv1, 20, 180, 100, 100, 'yellow');
        var shape5 = Object.create(Shape);
        shape5.init(mycv1, 150, 150, 50, 0, Math.PI, 0, 'blue');
        shapes.push(shape1);
        shapes.push(shape2);
        shapes.push(shape3);
        shapes.push(shape4);
        shapes.push(shape5);
        paint(mycv1, shapes);
    }

    let paint = function (cv, arr) {
        // loop through array of shapes and draw
        for (var i = 0; i < arr.length; i++) {
            arr[i].draw();
        }
    }

//    var oshapes = [];
    var shapes = [];
    window.addEventListener("click", initialize);
}


