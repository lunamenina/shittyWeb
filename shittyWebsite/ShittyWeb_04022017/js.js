(function() {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');

    var sketch = document.querySelector('#sketch');
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue('width'));
    canvas.height = parseInt(sketch_style.getPropertyValue('height'));

    var mouse = {x: 0, y: 0};
    var last_mouse = {x: 0, y: 0};

    /* Mouse Capturing Work */
    canvas.addEventListener('mousemove', function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);


    /* Drawing on Paint App */
    ctx.lineWidth = 12;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'white';

    canvas.addEventListener('mousedown', function(e) {
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);

    var onPaint = function() {
        ctx.beginPath();
        ctx.moveTo(last_mouse.x, last_mouse.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.closePath();
        ctx.stroke();
    };

    function drawManyCircles() {
        w = canvas.width;
        h = canvas.height;
        ctx.beginPath();
        ctx.fillStyle = "green"
        ctx.arc(w/3, h/3, 10, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "blue"
        ctx.arc(w*3/5, h*3/7, 16, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "grey"
        ctx.arc(w*5/11, h*3/7, 20, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "gold"
        ctx.arc(w*1/2, h*4/7, 23, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "pink"
        ctx.arc(w*2/5, h*3/4, 22, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "brown"
        ctx.arc(w/3, h*4/7, 30, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "purple"
        ctx.arc(w*4/7, h*5/7, 17, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "orange"
        ctx.arc(w*4/9, h*2/7, 30, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
    }
    drawManyCircles()
    setInterval(function() {drawManyCircles(canvas.width/30,canvas.width);}, 6000);
}());