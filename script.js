window.onload = function() {
    start();
    setInterval(draw, 1000 / 100);
}

function start() {
    radius = 10;
    x = 2 * radius;
    y = 8 * radius;
    vx = 2;
    vy = 0;
    grav = 0.05;
    friction = document.querySelector("#friction").value * 0.1;
    preFic = friction;
    setup();
}

function setup() {
    cnv = document.querySelector("#canvas");
    cnv.width = window.innerWidth / 2;
    cnv.height = window.innerHeight * 2 / 3;
    cnv.style.backgroundColor = "black";
    ctx = cnv.getContext("2d");
    setBackground();
}

function draw() {
    if (vy > -0.1 && vy < 0.1) { //  check for infinite bouncing
        if (Math.abs(cnv.height - radius - y) < 5) {
            y = cnv.height - radius;
            vy = 0;
        }
    }

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = "lime";
    ctx.fill();
    x += vx;

    if (y >= cnv.height - radius || y <= radius) { // bounce on touch with the bottom and top
        vy = -(vy - 2 * grav - (vy * friction));
        y = cnv.height - radius;
        vx = (vx - vx * friction);
    }
    y += vy;
    vy += grav;

    if (x >= cnv.width - radius || x <= radius) { // bounce on touch with the walls
        vx = -(vx - vx * friction);
        vy = (vy + 3 * grav / 2 - vy * friction);
    }

    if (preFic != document.querySelector("#friction").value * 0.1) { // look for change of friction by user
        start();
    }
}

function setBackground() { // Checked background full screen
    back = document.querySelector("#background");
    back.width = window.innerWidth;
    back.height = window.innerHeight;
    back.style.backgroundColor = "black";
    backctx = back.getContext("2d");

    backctx.beginPath();

    backctx.moveTo(0, back.height * 1 / 6);
    backctx.lineTo(back.width, back.height * 1 / 6);
    backctx.moveTo(0, back.height * 2 / 6);
    backctx.lineTo(back.width, back.height * 2 / 6);
    backctx.moveTo(0, back.height * 3 / 6);
    backctx.lineTo(back.width, back.height * 3 / 6);
    backctx.moveTo(0, back.height * 4 / 6);
    backctx.lineTo(back.width, back.height * 4 / 6);
    backctx.moveTo(0, back.height * 5 / 6);
    backctx.lineTo(back.width, back.height * 5 / 6);

    backctx.moveTo(back.width * 1 / 6, 0);
    backctx.lineTo(back.width * 1 / 6, back.height);
    backctx.moveTo(back.width * 2 / 6, 0);
    backctx.lineTo(back.width * 2 / 6, back.height);
    backctx.moveTo(back.width * 3 / 6, 0);
    backctx.lineTo(back.width * 3 / 6, back.height);
    backctx.moveTo(back.width * 4 / 6, 0);
    backctx.lineTo(back.width * 4 / 6, back.height);
    backctx.moveTo(back.width * 5 / 6, 0);
    backctx.lineTo(back.width * 5 / 6, back.height);

    backctx.strokeStyle = "rgb(20, 90,90)";

    backctx.stroke();
    backctx.beginPath();

    backctx.moveTo(0, back.height * 1 / 12);
    backctx.lineTo(back.width, back.height * 1 / 12);
    backctx.moveTo(0, back.height * 3 / 12);
    backctx.lineTo(back.width, back.height * 3 / 12);
    backctx.moveTo(0, back.height * 5 / 12);
    backctx.lineTo(back.width, back.height * 5 / 12);
    backctx.moveTo(0, back.height * 7 / 12);
    backctx.lineTo(back.width, back.height * 7 / 12);
    backctx.moveTo(0, back.height * 9 / 12);
    backctx.lineTo(back.width, back.height * 9 / 12);
    backctx.moveTo(0, back.height * 11 / 12);
    backctx.lineTo(back.width, back.height * 11 / 12);

    backctx.moveTo(back.width * 1 / 12, 0);
    backctx.lineTo(back.width * 1 / 12, back.height);
    backctx.moveTo(back.width * 3 / 12, 0);
    backctx.lineTo(back.width * 3 / 12, back.height);
    backctx.moveTo(back.width * 5 / 12, 0);
    backctx.lineTo(back.width * 5 / 12, back.height);
    backctx.moveTo(back.width * 7 / 12, 0);
    backctx.lineTo(back.width * 7 / 12, back.height);
    backctx.moveTo(back.width * 9 / 12, 0);
    backctx.lineTo(back.width * 9 / 12, back.height);
    backctx.moveTo(back.width * 11 / 12, 0);
    backctx.lineTo(back.width * 11 / 12, back.height);

    backctx.strokeStyle = "rgb(10, 120,120)";

    backctx.stroke();
}