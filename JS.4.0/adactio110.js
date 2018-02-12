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



        mycv.init('toolbox');
        mycv.canvas.addEventListener('click', hittest);

        let shape1 = Object.create(Shape);
        shape1.init(mycv, 20, 10, 120, 40, 'blue');

        shapes.push(shape1);
        repeater(mycv, shapes);

        let shapes = [];

        window.addEventListener('load', initialize);






};


