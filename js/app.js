/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var mouseDown = false;



    canvas.addEventListener('mousedown', function(evt) {
        ctx.beginPath();
        var canvasY = evt.clientY - canvas.offsetTop;
        var canvasX = evt.clientX - canvas.offsetLeft;
        ctx.moveTo(canvasX, canvasY);
        mouseDown = true;
    });

    canvas.addEventListener('mouseup', function(evt) {
        var canvasX = evt.clientX - canvas.offsetLeft;
        var canvasY = evt.clientY - canvas.offsetTop;
        ctx.lineTo(canvasX, canvasY);
        ctx.stroke();
        mouseDown = false;
    });

    canvas.addEventListener('mousemove', function(evt) {
        if (mouseDown) {
            var canvasX = evt.clientX - canvas.offsetLeft;
            var canvasY = evt.clientY - canvas.offsetTop;
            ctx.lineTo(canvasX, canvasY);
            ctx.stroke();
        }

        var color = document.getElementById('line-color-inp').value;
        ctx.strokeStyle = color;

        var width = document.getElementById('line-width').value;
        ctx.lineWidth = width;

        var join = document.getElementById('join-style').value;
        ctx.lineJoin = join;

        var cap = document.getElementById('end-cap').value;
        ctx.lineCap = cap;
    });
}); //DOMContentLoaded