
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 1515;
canvas.height =580;
canvas.tabindex = 0;



function square() {
   	canvas.width = 750;canvas.height = 750;
}
function rew() {
	var w= prompt ("input your width");
	canvas.width = w;
	
}
function reh() {
	var h= prompt ("input your height");
	canvas.height = h;
	
}

function red() {
canvas.style.backgroundColor = "red"
}
function white() {
canvas.style.backgroundColor = "white"
}
function blue() {
canvas.style.backgroundColor = "blue"
}
function green() {
canvas.style.backgroundColor = "green"
}

var mouse = { x: 0, y: 0 };

/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function (e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.strokeStyle = "red";
function getColor(colour) {ctx.strokeStyle = colour;}

function getSize(size) {ctx.lineWidth = size;}

function anyColor() {
	var any=prompt("Name of color")
canvas.style.backgroundColor = any;
}

//ctx.strokeStyle = 
//ctx.strokeStyle = document.settings.colour[1].value;

canvas.addEventListener('mousedown', function (e) {
  ctx.beginPath();
  ctx.moveTo(mouse.x, mouse.y);

  canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function () {
  canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function () {
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
};
//# sourceURL=pen.js

