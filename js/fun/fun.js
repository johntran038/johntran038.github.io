const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

// canvas.width = window.innerWidth - canvasOffsetX;
// canvas.height = window.innerHeight - canvasOffsetY;
// canvas.width = canvas.offsetLeft;
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;
let flatImg = null;

toolbar.addEventListener('click', e => {
    if(e.target.id === 'clear'){
        this.clear();
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke'){
        ctx.strokeStyle = e.target.value;
    }
    
    if(e.target.id === 'lineWidth'){
        lineWidth = e.target.value;
    }
});

const draw = (e) => {
    if(!isPainting){
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    ctx.beginPath();
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
});

canvas.addEventListener ("mouseout", e => {
    isPainting = false;
    ctx.stroke();
});

canvas.addEventListener('mousemove', draw);

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}
