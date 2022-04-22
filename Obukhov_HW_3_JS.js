// Задачи 1-3
let item_1;
item_1 = 5;
console.log(item_1);
// Задачи 4-6
let item_2;
item_2 = 3;
console.log(item_2);
// Задачи 7-9
let item_3;
item_3 = item_1 + item_2;
console.log(item_3);
// Задачи 10-12
let item_4;
item_4 = 'Yolochka';
console.log(item_4);
// Задачи 13-14
console.log(item_3 + item_4);
console.log(item_3 * item_4);
// Задачи 15-16
let item_5;
item_5 = item_3;
// Задачи 17-21
let item_6;
let item_6_type;
item_6 = 15;
item_6_type = typeof item_6;
console.log('item_6 ==', item_6 + ',', 'item_6_type ==', item_6_type);
// Задачи 22-25
let item_7 = String(item_6);
let item_7_type;
item_7_type = typeof item_7;
console.log('item_7 ==', item_7 + ',', 'item_7_type ==', item_7_type);
// Задачи 26-28
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
// Задачи 29-33
if (age_1 < age_2) {
    console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then ');
}
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log('Welcome  !');
}
else if (age_1 > age_3) {
    console.log('Keep calm and look Culture channel');
}
else {
    console.log('Technical work');
}
// =======================================================================================

// Задача со звёздочкой 1*

function checkAge1(age) {
    if (age < age_2) {
        console.log('You don’t have access cause your age is ' + age + ' It’s less then ');
    }
    else if (age >= age_2 && age < age_3) {
        console.log('Welcome  !');
    }
    else if (age > age_3) {
        console.log('Keep calm and look Culture channel');
    }
    else {
        console.log('Technical work');
    }  
}

checkAge1(17);
checkAge1(18);
checkAge1(61);

// Задача со звёздочкой 2*

function checkAge2(age) {
    if (typeof age === "number") {
        if (age < age_2) {
            console.log('You don’t have access cause your age is ' + age + ' It’s less then ');
        }
        else if (age >= age_2 && age < age_3) {
            console.log('Welcome  !');
        }
        else if (age > age_3) {
            console.log('Keep calm and look Culture channel');
        }
        else {
            console.log('Technical work');
        }
    }
    else {
        console.log('Error: value', age, 'of function is not a Number, it\'s', typeof age);
    }
}

checkAge2(17);
checkAge2("18");
checkAge2(61);

// Задача со звёздочкой 3**

function checkAge3(age) {
    age_n = Number(age);
    if (!isNaN(age_n)) {
        if (age_n < age_2) {
            console.log('You don’t have access cause your age is ' + age_n + ' It’s less then ');
        }
        else if (age_n >= age_2 && age_n < age_3) {
            console.log('Welcome  !');
        }
        else if (age_n > age_3) {
            console.log('Keep calm and look Culture channel');
        }
        else {
            console.log('Technical work');
        }
    }
    else {
        console.log('Error: value', age, 'of function is not a Number, it\'s', age_n);
    }
}

checkAge3("17");
checkAge3("18a");
checkAge3("aaa");

// Задача со звёздочкой 4***

function checkAge4(age) {
    age_n = Number(age);
    if (!isNaN(age_n)) {
        if (age_n < age_2) {
            console.log('You don’t have access cause your age is ' + age_n + ' It’s less then ');
        }
        else if (age_n >= age_2 && age_n < age_3) {
            console.log('Welcome  !');
        }
        else if (age_n > age_3) {
            console.log('Keep calm and look Culture channel');
        }
        else {
            console.log('Technical work');
        }
    }
    else {
        console.log('Error: value', age, 'of function is not a Number, it\'s', age_n);
    }
}

let arg = prompt('Input your age: ', [18]);
checkAge4(arg);