window.onload = () => {
	let answer = Math.floor(Math.random() * 100) + 1;

	let count = 0;

	const inputForm = document.querySelector('.input-form');
	const input = document.querySelector('.input');

	const result = document.querySelector('.result');

	inputForm.addEventListener('submit', function (event) {
		event.preventDefault();
	});

	function judgeNumber() {
		const userGuess = Number(input.textContent);

		if (!userGuess) {
			return;
		}

		count += 1;

		if (userGuess === answer) {
			result.textContent = `정답! (${ count }회)`;
			input.textContent = '';
			answer = Math.floor(Math.random() * 100) + 1;

			setTimeout(() => {
				location.reload();
			}, 3000);
		} else if (userGuess < answer) {
			result.textContent = 'UP!';
		} else if (userGuess > answer) {
			result.textContent = 'DOWN!';
		}
	}

	const numButtons = document.querySelectorAll('.input-form > button');

	numButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const buttonId = button.id;
			const numId = buttonId.split('-')[1];

			if (numId) {
				if (!isAllowable(Number(String(input.textContent) + String(numId)))) {
					return;
				}

				input.textContent += numId;
			} else {
				switch (buttonId) {
					case 'submit':
						button.addEventListener('click', () => {
							judgeNumber();
							input.textContent = '';
						});
						break;
					case 'reset':
						button.addEventListener('click', function () {
							input.textContent = '';
						});
						break;
				}
			}
		});
	});

	const isAllowable = (num) => {

		return !(num < 0 || num > 100);
	};
};