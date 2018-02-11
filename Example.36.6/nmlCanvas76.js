/*globals document, window */
'use strict';

/*
 * nmlCanvas76.js
 */
let initialize = function () {
    // a couple of button eventlisteners
    $('b1').addEventListener('click', moveShapes);
    $('b2').addEventListener('click', moveShapes);
    // create canvas object
    mycv = Object.create(Canvas);
    mycv.init('myCanvas', 'transparent');
    // create objects
    // put in array
    let shape1 = Object.create(Shape);
    shape1.init(mycv, 20, 10, 120, 40, 'blue');
    let shape2 = Object.create(Shape);
    shape2.init(mycv, 200, 100, 80, 60, 'green');
    shapes.push(shape1);
    shapes.push(shape2);
    redraw(mycv, shapes);
}

let redraw = function (cv, arr) {
    cv.clear();
    cv.prep();
    // loop through array of shapes and draw
    for (let i = 0; i < arr.length; i++) {
        arr[i].draw();
    }
}

let moveShapes = function (ev) {
    // which button was hit
    if (ev.target.id === 'b1') {
        shapes[0].move(2, 4);
    } else {
        shapes[1].move(3, -3);
    }
    redraw(mycv, shapes);
}

var shapes = [];
var mycv;
window.addEventListener('load', initialize);