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
let validStr = 'Input from 5 to 64 symbols';

console.log(vLength(validStr));

function vLength() {
    if (validStr.trim().length >= 5 && validStr.trim().length <= 64 && validStr.trim().length == validStr.length) {
        return vContent(validStr);
    }
    else if (validStr.trim().length >= 5 && validStr.trim().length <= 64 && validStr.trim().length < validStr.length) {
      return 'Обнаружены пробелы в начале и/или в конце строки: ' + (validStr.length-validStr.trim().length) + ' пробел(а)(ов). ' + vContent(validStr);
    }
    else if (validStr.trim().length > 0 && validStr.trim().length < 5 && validStr.trim().length == validStr.length || validStr.trim().length > 64 && validStr.trim().length == validStr.length) {
        return 'Недопустимая длина: ' + validStr.length + ' символ(а)(ов). ' + vContent(validStr);
    }
    else if (validStr.trim().length > 0 && validStr.trim().length < 5 && validStr.trim().length < validStr.length || validStr.trim().length > 64 && validStr.trim().length < validStr.length) {
        return 'Недопустимая длина: ' + validStr.trim().length + ' символ(а)(ов), также обнаружены пробелы в начале и/или в конце строки: ' + (validStr.length-validStr.trim().length) + ' пробел(а)(ов). ' + vContent(validStr);
    }
    else if (validStr.trim().length == 0 && validStr.length != 0) {
        return 'Не обнаружены символы, кроме пробелов: ' + validStr.length + ' пробел(а)(ов).';
    }
    else {
        return 'Пустая строка.';
    }
}


function vContent() {
    if (/^(?=.*[A-ZА-ЯЁ])(?=.*[0-9])(?=.*@)[A-ZА-ЯЁa-zа-яё0-9@]+$/.test(validStr)) {
        return 'Корректно введённая строка: ' + validStr;
    }
    else {
        return vContent1(validStr);
    }
}

function vContent1() {
    if (!(/^(?=.*[A-ZА-ЯЁ])[\w\W\s\S\d\D]+$/.test(validStr))) {
        return 'Не найдена ни одна прописная буква. ' + vContent2(validStr);
    }
    else {
        return vContent2(validStr);
    }
}

function vContent2() {
    if (!(/^(?=.*[0-9])[\w\W\s\S\d\D]+$/.test(validStr))) {
        return 'Не найдена ни одна цифра. ' + vContent3(validStr);
    }
    else {
        return vContent3(validStr);
    }
}

function vContent3() {
    if (!(/^(?=.*@)[\w\W\s\S\d\D]+$/.test(validStr))) {
        return 'Не найден ни один @ (at). ' + vContent4(validStr);
    }
    else {
        return vContent4(validStr);
    }
}

function vContent4() {
    if (!(/^[A-ZА-ЯЁa-zа-яё0-9@]+$/.test(validStr))) {
        return 'Обнаружены недопустимые символы, кроме букв, цифр и @ (at): ' + validStr;
    }
    else {
        return '';
    }
}