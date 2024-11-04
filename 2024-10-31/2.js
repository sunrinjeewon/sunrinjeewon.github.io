function start() {
    init(); // canvas context 생성 및  공의 초기 위치 설정
  
    velocity = Number(document.getElementById("velocity").value); // 속도 입력
  
    angle = Number(document.getElementById("angle").value); // 각도 입력

    let angleR = angle * Math.PI / 180; // 각도를 라디안으로 변환

    ballVx = velocity * Math.cos(angleR); // x축 속도 계산

    ballVy = -velocity * Math.sin(angleR); // y축 속도 계산

    draw(); // 공 그리기

    timer = setInterval(calculate, 100); // 0.1초마다 calculate 함수 호출

    return false // form submit 방지
}