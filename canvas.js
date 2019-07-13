const canvas = document.createElement("canvas");
canvas.id = "canvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.append(canvas);
let c = canvas.getContext('2d');

let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;



let dx = 2;
let dy = 2;
let dr = 1.3;


function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function Circle(x, y, dx, dy, radius, rgb) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeStyle = rgb;

    this.draw = function () {
        c.beginPath();
        c.strokeStyle = this.strokeStyle;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.y += this.dy;

        this.draw();
    }

}


let arrCircles = [];

for (let i = 0; i < 300; i++) {
    let radius = getRandom(30, 50);
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let rgb = "rgb("+r+", "+g+", "+b+")";

    arrCircles.push(new Circle(x, y, dx, dy, radius, rgb));
}


function animate() {
    requestAnimationFrame(animate);

        c.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < arrCircles.length; i++) {
            arrCircles[i].update();
        }
}

animate();