let users = ["김상협"];

let currentUser = _____("currentUser을 입력해 주세요!");

let isnew = true;
___ (existing __ users) { //새로운 사용자인지 확인
    __ (existing === currentUser) isnew = false;
}

__ (isnew) { //사용자에 따라 다른 메시지 출력
    alert(`${currentUser}님 처음 접속 하신 것을 환영합니다.`);
} ____ {
    alert(`${currentUser}님 다시 접속 하신 것을 환영합니다.`);
}

_____ (true) { //무한 반복
    let command = ______("무엇을 도와드릴까요? (press: Q to exit)");
    __ (command === "Q" || command == "q") _____;
}

//조건문, 반복문 기본 구조
