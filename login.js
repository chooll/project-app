const login = document.getElementById("loginInput");

const password = document.getElementById("passwordInput");

function getAccout(login, password) {
    return { "login": login, "password": password };
}

const accounts = [getAccout("gusev", "12345"),
    getAccout("bogdanov", "12345"),
    getAccout("boshina", "12345")
];

function loginInApp() {
    let st = false;
    for (let i = 0; i != accounts.length; i++) {
        if (login.value == accounts[i]["login"]) {
            if (password.value == accounts[i]["password"]) {
                st = true;
                window.location.href = 'main.html';
                break;
            }
        }
    }
    if (!st) {
        let error = document.getElementById("errorText")
        error.innerHTML = `<p>* Неправильный логин или пароль</p>`;
    }
}