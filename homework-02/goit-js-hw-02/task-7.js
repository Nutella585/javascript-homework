const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    return (login.length >= 4 && login.length <= 16) ? true : false
};

const isLoginUnique = function(allLogins, login) {
   return (!allLogins.includes(login)) ? true : false
};

const addLogin = function(allLogins, login) {
    const loginsArr = allLogins;
    if (isLoginUnique(loginsArr, login)) {
        if (isLoginValid(login)) {
            loginsArr.push(login);
            return "Added new login:" +  login;
        }
        return new RangeError(login + ": Write more/less characters!.");
    }
    return new TypeError(login + ": Person with this login is already created.");
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'