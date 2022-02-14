document.getElementById('login').addEventListener('click', function () {
    const emailID = document.getElementById('email');
    const password = document.getElementById('pass');


    if (emailID.value == 'abc@email.com' && password.value == 1234) {
        window.location.href = 'bank.html';
    }
    else {
        const errorMsg = document.createElement('p');
        errorMsg.innerText = '*** Wrong Email or Password!! Input Correct Email and Password ***';
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '14px';
        document.getElementById('login-container').appendChild(errorMsg);
    }
})