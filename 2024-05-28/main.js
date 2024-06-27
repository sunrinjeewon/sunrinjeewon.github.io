isAnonymous = true;

const users = [{username: 'test', password: 't'}];

const loginButton = document.querySelector('#login');
const registerButton = document.querySelector('#register');
const logoutButton = document.querySelector('#logout');

logoutButton.style.display = 'none';

loginButton.addEventListener('click', () => {
    const username = prompt('아이디를 입력해주세요.');
    const password = prompt('비밀번호를 입력해주세요.');

    let isSuccess = false;

    for (user of users) {
        

        if (user.username === username) {
            if (user.password === password) {
                isAnonymous = false;
                isSuccess = true;
                break;
            }
        }
    }

    if (!isSuccess) {
        alert('유저이름 또는 비밀번호가 맞지 않습니다.');
    } else {
        alert('성공적으로 로그인되었습니다.');
        loginButton.style.display = 'none'
        registerButton.style.display = 'none';
        logoutButton.style.display = 'block';
    }
})

logoutButton.addEventListener('click', () => {
    const yes = confirm('정말로 로그아웃 하시겠습니까?');

    if (yes) {
        isAnonymous = true;
        loginButton.style.display = 'block';
        registerButton.style.display = 'block';
        logoutButton.style.display = 'none';
    }
});

registerButton.addEventListener('click', () => {
    const username = prompt('아이디를 입력해주세요.');
    const password = prompt('비밀번호를 입력해주세요.');

    users.push({username, password});

    alert('성공적으로 회원가입되었습니다.')
})