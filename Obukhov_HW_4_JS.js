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
    if (validStr.length > 4 && validStr.length < 65) {
        return vContent(validStr);
    }
    else if (validStr.length > 0 && validStr.length < 5 || validStr.length > 64) {
        return 'Length is wrong: ' + validStr.length + '. ' + vContent(validStr);
    }
    else {
        return 'You didn\'t input anything.';
        //BREAK!!!!!!!!!!!!!!!!!
    }
}

function vContent() {
    
}