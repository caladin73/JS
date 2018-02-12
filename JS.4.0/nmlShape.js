/*globals document, window */
'use strict';

/**
 * Shape object
 */
let Shape = {
    init(cv, x, y, r, width, height, color) {
        this.ctx = cv.context;
        this.x = x;
        this.y = y;
        this.r = r;
        this.width = width;
        this.height = height;
        this.color = color;
    },

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
