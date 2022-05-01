// JS. HW_2

// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

//let validstr = prompt('Input from 5 to 64 symbols. Should include at least one uppercase letter, one number and one @');
let validStr = 'Input from 5 to 64 symbols##';

console.log(vLength(validStr));

function vLength() {
    if (validStr.trim().length >= 5 && validStr.trim().length <= 64 && validStr.trim().length == validStr.length) { // проверяю, что длина от 5 до 64 символов, и при этом нет пробелов в начале/конце строки
        return vContent(validStr);
    }
    else if (validStr.trim().length >= 5 && validStr.trim().length <= 64 && validStr.trim().length < validStr.length) { // проверяю, что длина от 5 до 64 символов, и при этом в начале/конце строки есть пробелы
      return 'Обнаружены пробелы в начале и/или в конце строки: ' + (validStr.length-validStr.trim().length) + ' пробел(а)(ов). ' + vContent(validStr);
    }
    else if (validStr.trim().length > 0 && validStr.trim().length < 5 && validStr.trim().length == validStr.length || validStr.trim().length > 64 && validStr.trim().length == validStr.length) { // проверяю, что длина меньше 5 или больше 64 символов, и при этом пробелов в начале/конце строки нет
        return 'Недопустимая длина: ' + validStr.length + ' символ(а)(ов). ' + vContent(validStr);
    }
    else if (validStr.trim().length > 0 && validStr.trim().length < 5 && validStr.trim().length < validStr.length || validStr.trim().length > 64 && validStr.trim().length < validStr.length) { // проверяю, что длина меньше 5 или больше 64 символов, и при этом есть пробелы в начале/конце строки
        return 'Недопустимая длина: ' + validStr.trim().length + ' символ(а)(ов), также обнаружены пробелы в начале и/или в конце строки: ' + (validStr.length-validStr.trim().length) + ' пробел(а)(ов). ' + vContent(validStr);
    }
    else if (validStr.trim().length == 0 && validStr.length != 0) { // проверяю, что были введены только пробелы
        return 'Не обнаружены символы, кроме пробелов: ' + validStr.length + ' пробел(а)(ов).';
    }
    else { // проверяю, что строка была просто пустой
        return 'Пустая строка.';
    }
}


function vContent() {
    if (/^(?=.*[A-ZА-ЯЁ])(?=.*[0-9])(?=.*@)[A-ZА-ЯЁa-zа-яё0-9@]+$/.test(validStr)) { // проверяю, что в строке есть все условия задания
        return 'Корректно введённая строка: ' + validStr;
    }
    else {
        return vContent1(validStr);
    }
}

function vContent1() {
    if (!(/^(?=.*[A-ZА-ЯЁ])[\w\W]+$/.test(validStr))) { // проверяю, что не была введена ни одна заглавная буква
        return 'Не найдена ни одна прописная буква. ' + vContent2(validStr);
    }
    else {
        return vContent2(validStr);
    }
}

function vContent2() {
    if (!(/^(?=.*[0-9])[\w\W]+$/.test(validStr))) { // проверяю, что не была введена ни одна цифра
        return 'Не найдена ни одна цифра. ' + vContent3(validStr);
    }
    else {
        return vContent3(validStr);
    }
}

function vContent3() {
    if (!(/^(?=.*@)[\w\W]+$/.test(validStr))) { // проверяю, что не был введён ни один символ @
        return 'Не найден ни один @ (at). ' + vContent4(validStr);
    }
    else {
        return vContent4(validStr);
    }
}

function vContent4() {
    if (!(/^[A-ZА-ЯЁa-zа-яё0-9@]+$/.test(validStr))) { // проверяю, что были какие-то посторонние символы, кроме букв, цифр и @
        let result = validStr.split(/[A-ZА-ЯЁa-zа-яё0-9@]*/);
        return 'Обнаружены недопустимые символы, кроме букв, цифр и @ (at): ' + result;
    }
    else {
        return '111222333';
    }
}