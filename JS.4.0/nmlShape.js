/*globals document, window */
'use strict';

/**
 * Shape object
 */

let Shape = {
    init(cv, x, y, color) {
        this.ctx = cv.context;
        this.x = x;
        this.y = y;
        this.color = color;
    },
}

let Rect = {
    width: null;
height: null;

setup(cv, x, y, color)
{
    this.init(cv, x, y, color)
    this.width = width;
    this.height = height;
}
,

getWidth()
{
    return this.width;
}
getHeight()
{
    return this.height;
}

}


let Arc = {

    r: null;

setup(cv, x, y, color) {
    this.init(cv, x, y, color)
    this.r = return;
}

getR() {
    return this.r;
}


drawRect() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
}

drawArc() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
},

move(dx, dy) {
    this.x += dx;
    this.y += dy;
}
};
