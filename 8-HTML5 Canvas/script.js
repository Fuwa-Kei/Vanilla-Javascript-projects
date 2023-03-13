const canvas = document.querySelector('#draw');

// you draw on 'context' 

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// only draws when mousedown
let isDrawing = false;
// where you start and stop the line
let lastX = 0;
let lastY = 0; 
let direction = true;
let hue = 0;

const draw = (e) => {
    if(!isDrawing) return; //stop fn when mouse is not down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY); //data from mouse event
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]

    hue++;
    if (hue > 360) {
        hue = 0
    }; //reset the hue so the number doesn't get stupid big

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;  
    }
    // to increment and decrement the line width if you want
    if (direction) {
        ctx.lineWidth++; 
    } else {
        ctx.lineWidth--;
    }
    console.log(ctx.lineWidth)
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

