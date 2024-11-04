function start() {
    init(); // canvas의 context를 가져옴, 공의 위치 초기화

    velocity = Number(document.getElementById("velocity").value);

    angle = Number(document.getElementById("angle").value);

    let angleR = angle * Math.PI / 180;

    ballVx = velocity * Math.cos(angleR);

    ballVy = -velocity * Math.sin(angleR);

    draw();

    timer = setInterval(calculate, 100);

    return false


}