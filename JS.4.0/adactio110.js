/*globals window, document */
'use strict';

/*
 * adactio110.js
 */

let create_canvas = function () {

    var x = document.getElementById("myForm").elements[0].value;
    var y = document.getElementById("myForm").elements[1].value;

    document.getElementById("room").style.width = x + "px";
    document.getElementById("room").style.height = y + "px";

    document.getElementById("toolbox").style.width = 400 + "px";
    document.getElementById("toolbox").style.height = 400 + "px";


    let initialize = function () {
        let mycv = Object.create(Canvas);
        mycv.init('toolbox', 'transparent');
        mycv.canvas.addEventListener('click', hittest);
        // create objects
        // put in array
        let shape1 = Object.create(Shape);
        shape1.init(mycv, 20, 10, 120, 40, 'blue');
        let shape2 = Object(Shape);
        shape2.init(mycv, 200, 100, 80, 60, 'green');
        shapes.push(shape1);
        shapes.push(shape2);
        repeater(mycv, shapes);
    }

    let redraw = function (cv, arr) {
        cv.clear();
        cv.prep();
        // loop through array and draw
        for (var i = 0; i < arr.length; i++) {
            arr[i].draw();
        }
    }

    let repeater = function (cv, arr) {
        // if this is an animation build a setInterval loop here
        // if not, just draw
        redraw(cv, arr);
    }

    let hittest = function (ev) {
        for (let i = 0; i < shapes.length; i++) {
            let cx = shapes[i].ctx;
            cx.beginPath();
            cx.rect(shapes[i].x, shapes[i].y, shapes[i].width, shapes[i].height);
            cx.closePath();
            let bb = this.getBoundingClientRect();    // canvas size and pos
            // mouse to canvas coordinates
            let x = (ev.clientX - bb.left) * (this.width / bb.width);
            let y = (ev.clientY - bb.top) * (this.height / bb.height);
            if (cx.isPointInPath(x, y)) {
                cx.fillStyle = "yellow";
                cx.fill();
                // window.alert("hit: "+x+","+y);
            } else {
                // window.alert("nohit: "+x+","+y);
            }
        }

    };


    let shapes = [];

    window.addEventListener('load', initialize);

}