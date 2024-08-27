// 버튼 클릭 시 입력된 기호를 화면에 추가하는 함수
function appendSymbol(symbol) {
	const display = document.getElementById('display'); // 디스플레이 요소 가져오기

	// 연산자 목록 (공백을 추가하기 위한 조건으로 사용)
	const oper = ['+', '-', '*', '/'];

	// 입력된 기호가 연산자라면 앞뒤에 공백을 추가
	if (oper.includes(symbol)) {
		display.value += ` ${symbol} `;
	} else {
		// 연산자가 아니면 그냥 기호를 추가
		display.value += symbol;
	}
}

// 디스플레이 화면을 지우는 함수
function clearDisplay() {
	document.getElementById('display').value = ''; // 디스플레이 값을 빈 문자열로 설정
}

// 디스플레이에서 마지막 입력을 삭제하는 함수
function deleteLast() {
	const display = document.getElementById('display'); // 디스플레이 요소 가져오기
	display.value = display.value.slice(0, -1); // 마지막 문자 삭제
}

// 계산 결과를 출력하는 함수
function calculate() {
	const display = document.getElementById('display'); // 디스플레이 요소 가져오기
	try {
		// 입력된 수식이 유효한지 확인하는 정규식 (숫자, 연산자, 괄호, 공백만 허용)
		if (/^[0-9+\-*/(). ]+$/.test(display.value)) {
			// 입력된 수식을 평가하고 결과를 디스플레이에 출력
			const result = new Function('return ' + display.value)();
			display.value = result;
		} else {
			// 유효하지 않은 입력일 경우 에러 메시지 출력
			display.value = 'Invalid input';
		}
	} catch (error) {
		// 계산 중 오류가 발생하면 'Error' 메시지 출력
		display.value = 'Error';
	}
}
