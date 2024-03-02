//! Задание 2
// Создайте переменную lang и присвойте ей значение
// en или ru или de или kg используя тернарный оператор
// выведите сообщение в зависимости от значения lang
// lang = 'en' выведет 'This is english'
// lang = 'ru' выведет 'Это русский'
// lang = 'de' выведет 'Das ist Deutsch'
// lang = 'kg' выведет 'Бул кыргыз тили'

// let lang = "de";
// if (lang === "en") {
//   console.log("this is english");
// } else if (lang === "ru") {
//   console.log("Это русский");
// } else if (lang === "kg") {
//   console.log("Бул кыргыз тили");
// } else if (lang === "de") {
//   console.log("Das ist Deutsch");
// }

//! Задание 3
// let price = 600; // присваиваем значение цены
// let discount = 15; // присваиваем значение скидки

// let result = price - (price * discount) / 100;
// console.log(result);

//! Задание 5
// Напишите программу, которая проверяет, является ли
// введенное число четным или нечетным, используя оператор
//  «%». Выведите «Число ${число} четное», если число делится
// на 2. Иначе выведите «Число ${число} нечетное», если число
// возвращает остаток при делении на 2
// let num = +prompt("chislo");

// if (num % 2 === 0) {
//   console.log(`«Число ${num} четное»`);
// } else {
//   console.log(`«Число ${num} нечетное»`);
// }

//! Задание 6
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать
// «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Подсказка: передача пустого ввода в приглашение prompt возвращает
// пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

// let login = prompt("Enter your login");
// let password = "";
// if (login === "Admin") {
//   password = prompt("Enter your password");
// } else if (login === null) {
//   alert("Отменено");
// }
// if (password === "Я главный") {
//   alert("Wellcome Admin");
// }

// let name = prompt("Login");
// let password = prompt("Введите пароль");
// name == "Admin" ? console.log("You are admin") : console.log("Error");
// password === "Я главный"
//   ? console.log("Hello")
//   : console.log("Неверный пароль");

//! Задание 1
// Создайте переменные firstNum, secondNum, thirdNum
// и присвойте им числовые значения.
// Выведите в консоль число с наибольшим значением.
// Например: если в firstNum будет хранится число 5, в secondNum 3,
// а в thirdNum 16, то вывод в консоль должен быть:
// Максимальное число 16
// Учтите возможность равенства всех трех чисел.

// let num1 = 5;
// let num2 = 3;
// let num3 = 16;
// if (num1 > num2 && num2 > num3) {
//   console.log(`Максимальное число ${num1}`);
// }

// let num1 = 10;
// let num2 = 5;
// let num3 = 5;

// if (num1 > num2 && num1 > num3) {
//   console.log(`Максимальное число ${num1}`);
// } else if (num2 > num3 && num2 > num1) {
//   console.log(`Максимальное число ${num2}`);
// } else if (num3 > num1 && num3 > num2) {
//   console.log(`Максимальное число ${num3}`);
// }

// let age = +prompt("Введите возраст");
// 1-13
// 14-17
// 18-90

// if (age >= 1 && age <= 13) {
//   console.log("Лунтик");
// } else if (age >= 14 && age <= 17) {
//   console.log("Хроники нарни");
// } else if (age >= 18 && age <= 90) {
//   console.log("Заклятие");
// } else {
//   console.log("ты еще жив???");
// }

// ! METHOD STRING

// let str = "hello";
// str.toUpperCase();
// console.log(str.length);
// console.log(str.includes("а"));
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let name = "john";
// if (name) {
//   console.log(name.toUpperCase());
// } else {
//   console.log(name);
// }

// name[0] === name[0].toLowerCase()
//   ? console.log(name[0].toUpperCase() + name.slice(1))
//   : console.log(name[0].toLowerCase() + name.slice(1));

// console.log(!true || !true);

// let num = 10;
// num % 2 === 0 ? console.log("true") : console.log("false");

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.length);
// console.log(arr[0]);
// arr.pop();

// console.log(window);

// if(){
// }
// else
// {

// }

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// ? :

// && - и

// || - или

// !

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2);
// console.log(arr);

// let arr = [5, 4, 3, 2, 1];
// arr.reverse();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// if (arr.includes(8)) {
//   alert("YES");
// } else {
//   alert("NO");
// }

// let str = "hello world";
// let arr = str.split("").reverse().join("");
// console.log(arr);

// let arr = ["React", "HTML", "CSS", "JS"];
// let res = arr.shift();
// arr.push(res);
// console.log(arr);

// console.log("     ".length);

// let str = "hello World";
// console.log(str[0].toUpperCase() + str.slice(1));
//todo "Hello World"

// let arr = [1, 2, 3, 4, 5];

// console.log(arr[0] * 2);
// console.log(arr[1] * 2);
// console.log(arr[2] * 2);
// console.log(arr[3] * 2);
// console.log(arr[4] * 2);

// for (let i = 1; i < arr.length; ++i) {
//   console.log(i);
// }

// for (let i = 1; i <= 1000; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

// for (let i in arr) {
//   if (i % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

//! 1
// 1 - 50

//! 2
// 50 - 1

//! 3
// 1 - 50 - четный

//! 4
// 1 - 50 - не четный

//! 5
// 1 - 50 10 чон 40 кичине четный сандар

//! 6

// let arr = [];

// for (let i = 1; i <= 10; i++) {
//   arr.push("X");
// }
// console.log(arr);

// let arr = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];

// Задание №1
// let arr = ["Sultan", "Azamat", "Eldar", "Islam", "Taalai"];
// let res = [];
// for (let i in arr) {
//   if (i % 2 !== 0) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// Выведите в консоль имена Azamat и Islam с помощью цикла for

// Задание №2
// Создайте пустой массив и заполните его числами
// от 1 до 10 с помощью цикла for

// let res = [];
// for (let i = 1; i <= 10; i++) {
//   res.push(i);
// }
// console.log(res);

// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99
// включительно с помощью цикла.

// for (let i = 50; i < 100; i++) {
//   console.log(i);
// }

// Задание №4
// Выведите те же числа, но уже в обратном порядке,
// т.е. с 99 до 50.

// for (let i = 99; i >= 50; i--) {
//   console.log(i);
// }

// Задание №5
// Найдите самый длинный элемент массива и вывкдите в консоль
// ["pen", "pineapple", "apple", "pen"]
// let arr = ["hadsasdaasdg", "pen", "pineapple", "apple", "sdasdasdasdpen"];
// let maxString = arr[0];

// for (let i of arr) {
//   if (maxString.length < i.length) {
//     maxString = i;
//   }
// }
// console.log(maxString);
// for (let i = 0; i < arr.length; i++) {
//   if (maxString.length < arr[i].length) {
//     maxString = arr[i];
//   }
// }
// console.log(maxString);

// Задание №6
// Так же найдите самый короткий элемент этого же массива

// Задание №7
// Выведите в консоль все элементы с четными индексами.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i in arr) {
//   if (i % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// Задание №8

// let arr = [1, 2, 3, 40, 5, 6, 7, 8, 9];
// let maxNum = 0;
// for (let i of arr) {
//   if (maxNum < i) {
//     maxNum = i;
//   }
// }
// console.log(maxNum);

// Дан двумерный массив. Выведите в консоль все элементы.
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i of arr) {
//   for (let j of i) {
//     console.log(j);
//   }
// }

// let arr = [20, 12, 40, 0, 24, 50, 32];

// let idx = arr.indexOf(0);
// let newArr = arr.slice(idx);
// let sum = 0;

// for (let i of newArr) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;

// for (let i of arr) {
//   if (i === 0) {
//     break;
//   } else {
//     sum += i;
//   }
// }
// console.log(sum);

// let arr = [1, 2, 3, 4];
// let res = 0;
// for (let i of arr) {
//   res += i;
// }

// console.log(res);

// #
// ##
// ###
// ####
// #####
// ######
// #######
// let res = "";
// for (let i = 1; i <= 7; i++) {
//   res += "#";
//   console.log(res);
// }

// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

// let arr = [];

// for (let i = 1; i <= 7; i++) {
//   arr.push("#");
//   console.log(arr.join(""));
// }
// for (let i = 1; i <= 7; i++) {
//   arr.pop();
//   console.log(arr.join(""));
// }
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// let str = "!Hello #World,";
// let resStr = "";
// for (let i of str) {
//   if (i !== "!" && i !== "#" && i !== ",") {
//     resStr += i;
//   }
// }
// console.log(resStr);

// Hello World ! # ,

// 1-20

// let result = []
// let n = 9;
// console.log(n.toString());

// let str = "hghg gh jg j h gj hg hj jhg hj hgh g hg hgh ";
// let sumLength = 0;
// for (let i of str) {
//   if (i === " ") {
//     sumLength += 1;
//   }
// }

// console.log(sumLength);

// let sumLength = "";
// for (let i of str) {
//   if (i === " ") {
//     sumLength += i;
//   }
// }

// console.log(sumLength.length);
//!========================================================================

// Task 1
// Создайте массив из чисел arr.
// Напишите цикл for of, который выведет в консоль произведение
// всех элементов массива.Если в переменной  хранится массив [1 2, 3, 4]
// Вывод должен быть:
// 24
// т.к. 24 = 1 x 2 x 3 x 4

// Task 2
// Создайте переменную num.Присвойте переменной числовое
// значение. Напишите цикл, который выведет в консоль сумму
// всех чисел от 1 до num включительно.
// Например, если в перемнной num хранится число 5
// Выводом будет:
// 15

// т.к. 15 = 1 + 2 + 3 + 4 + 5

// Task 3
// Создате массив из чисел arr.
// С помощью цикла for ... of и оператора if, выведите в консоль
// элементы массива, значение которых больше 3, но меньше 10.
// Например, если в переменной  хранится значение: [1, 4, 2, 5, 8, 5, 0, -1, 7, 33]
// Вывод должен быть:

// 4, 5, 8, 7

// Примечание:
// Сделать со всеми видами циклов !!!

// Task 1
// Создайте переменную str и присвойте ей строковое значение.
// Ваша программа должна каждую четную по последовательности букву
// перезаписать верхним регистром. Результат нужно вывести в консоль.
// Подсказка: нужно использовать метод split().
// let str = "javascript";

// Task 2
// Eсть переменная
// которая принимает строку в качестве аргумента и возвращает
// количество гласных, которые содержатся в строке.
// Гласными являются [а], [о], [и], [ы], [у] и [э], [й], [е], [я], [ю], [ё]
// К примеру:
// 'достопримечательность'// --> 7
// 'субстанционализирующийся' // --> 11

// let str = "достопримечательность";
// let sum = 0;
// for (let i of str) {
//   if (
//     i === "а" ||
//     i === "о" ||
//     i === "и" ||
//     i === "ы" ||
//     i === "у" ||
//     i === "э" ||
//     i === "й" ||
//     i === "е" ||
//     i === "я" ||
//     i === "ю" ||
//     i === "ё"
//   ) {
//     sum++;
//   }
// }
// console.log(sum);

// let newStr = str.toLowerCase();
// let g = ["а", "о", "и", "ы", "у", "э", "й", "е", "я", "ю", "ё"];
// let sum = 0;

// for (let i = 0; i < newStr.length; i++) {
//   if (g.includes(newStr[i])) {
//     sum++;
//   }
// }
// console.log(sum);

// Task 3
// Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// Task 4
// Дана строка: 'Hello, world!', необходимо вывести в консоль
// каждый символ по-отдельности(игнорировать спец. и пробельные
// символы(то есть, ' ', '!', ',' выводить не нужно))

// Task 5
// let arrNums = [12, 21, 27, 31, 45, 50 ];
// С помощью цикла for и оператора if выведите в console элементы
// массива, которые больше 20-ти, но меньше 30-ти.

// Task 5
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL';

// let str = "hello";
// let newStr = "";
// for (let i of str) {
//   if (i !== "a" && i !== "e" && i !== "o") {
//     newStr += i.toUpperCase();
//   }
// }
// console.log(newStr);

// Task 6
// Создайте переменную arr и присвойте массив со строками.
// Напишите код, который переписывает первые буквы строк
// массива верхним регистром. Вы должны вывести новый массив в
// переменной newArr в console.log()

// let str = "";
// for (let i = 1; i < 20; i++) {
//   str += i;
// }
// console.log(str);
// Пример ввода:
// let arr = ["programming", "code", "javascript", "react"];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   res.push(arr[i][0].toUpperCase() + arr[i].slice(1));
// }
// console.log(res);

// Task 7
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
// вывести в консоль символы у которых четный индекс

// console.log(name);
// let name = 1;

// let name = "IT";
// //? FUNCTION DECLARATION
// test1();
// function test1() {
//   let name = "IT";
//   console.log(name);
// }

// let test2 = function () {
//   let name = "IT";
//   console.log(name);
// };
// test2();

// function test3() {
//   let name = "IT";
// }
// function test4() {
//   let name = "IT";
// }
// console.log(name);

// function dec(a, b, c, d) {
//   console.log(...arguments);
// }
// dec(1, 2, 3, 4);

// let arr = [1];

// arr.push(1)

// let expess = function (a) {
//   console.log(a);
// };
// expess(1);

// function name() {}
// name();

// let str = function (a) {
//   console.log(a);
// };
// str(5);

// > Инженер 35-группа:
// Задание №1
// Создайте функцию checkTask которая выводит в консоль строку:
// Hello World!
// function checkTask(H) {
//   console.log(H);
// }
// checkTask("Hello, World");
// Задание №2
// Напишите функцию checkTask(), которая при вызове будет возвращать строку:
// Привет, JavaScript!
// let checkTask = function (e) {
//   console.log(e);
// };
// checkTask("Hello, JavaSkript");
// Задание №3
// Создайте функцию checkTask(), которая принимает в качестве аргумента два числа и возвращает их сумму.
// Например, для чисел 2 и 20 функция возвратит:
// 22
// function checkTask(w) {
//   console.log(w);
// }
// checkTask(22);
// > Инженер 35-группа:
// Задание №4
// Напишите функцию checkTask(), которая в качестве аргумента принимает число - возраст.
// Если возраст больше или равен 18 возвратите строку:
// Добро пожаловать
// иначе:
// Вход запрещен

// let age = +prompt("возраст");
// function checkTask(age) {
//   if (age >= 18) {
//     console.log("Добро пожаловать");
//   } else {
//     console.log("Вход запрещен");
//   }
// }
// checkTask(age);

// > Инженер 35-группа:
// Задание №5
// Напишите функцию checkTask(), которая принимает целое число и возвращает сумму всех его цифр.
// Например, для числа , функция должна вернуть:
// 15
// так как 4 + 5 + 6 = 15

// function checkTask(str, search) {}
// checkTask("Hello worldwwww", "w");

// console.log(1 * 2 * 3 * 4 * 5);

// > Инженер 35-группа:
// // Задание №5
// Напишите функцию checkTask(), которая принимает целое число и возвращает сумму всех его цифр.
// Например, для числа , функция должна вернуть:
// 15
// так как 4 + 5 + 6 = 15

// > Инженер 35-группа:
// Напишите функцию checkTask(), которая принимает два аргумента, строку и букву.
// Функция должна возвращать число повторений переданной буквы в строке.
// Например, если были переданы такие аргументы - , функция должна возвратить:
// 2
// т.к в строке 'hello' две буквы 'l'

// function checkTask(str, letter) {
//   let sum = 0;
//   for (let i of str) {
//     if (i === letter) {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(checkTask("Hello", "l"));

// > Инженер 35-группа:
// Задание №7
// Напишите функцию, которая принимает параметром элемент и возвращает его тип (typeof)

// const checkTask = (s) => typeof s;
// console.log(checkTask(0));

// > Инженер 35-группа:
// Напишите функцию которая принимает массив из чисел.
// Находит количество четных чисел в массиве и их сумму. И выведите их на экран.
// К примеру:
// let arr = [1, 2, 3, 4, 5, 6];
// function checkTask(arr) {
//   let positiveArr = [];
//   let positiveSum = 0;

//   for (let i of arr) {
//     if (i % 2 === 0) {
//       positiveArr.push(i);
//       positiveSum += i;
//     }
//   }
//   return `Четные числа в массиве: [${positiveArr}] их сумма равна ${positiveSum}`;
// }
// console.log(checkTask(arr));
// Четные числа в массиве: ${newArr} их сумма равна ${sum}
// Четные числа в массиве: [2, 4, 6] их сумма равна 12

// > Инженер 35-группа:
// Задание № 11
// Напишите функцию, которая принимает массив с числами и выводит
// количество отрицательных чисел в этом массиве
// Пример: [7, -5, -29, 0, 62, 4, 5, -6, -27]
// Вывод: //4

// function checkTask(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       sum++;
//     }
//   }
//   for (let i of arr) {
//     if (i < 0) {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(checkTask([-7, -5, -29, 0, 62, 4, 5, -6, -27]));

// > Инженер 35-группа:
// Напишите функцию checkTask которая принимает число и возвращает его факториал.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа.
// Например для числа , функция должна возвратить:
// 120
// т.к
// для числа , результатом будет:
// 720

// 1 * 2 * 3 * 4 * 5 = 120

// const checkTask = function (num) {
//   let f = 1;
//   for (let i = 1; i <= num; i++) {
//     f *= i;
//   }
//   return f;
// };
// console.log(checkTask(2));

// function check(num) {
//   return num;
// }
// console.log(check(1));

// let arr = ["1", 2, 4, "5", 6, "3"];

// function checkTask() {
//   let strArr = [];
//   let numArr = [];
//   for (let i of arr) {
//     if (typeof i === "string") {
//       strArr.push(i);
//     } else {
//       numArr.push(i);
//     }
//   }
//   return `Строки [${strArr}], числа [${numArr}]`;
// }

// console.log(checkTask());

// let arr = ["hello", "hello", "hello"];

// const checkTask = function () {
//   let res = "";
//   for (let i of arr) {
//     for (let j in i) {
//       if (j % 2 == 0) {
//         res += i[j].toUpperCase();
//       } else {
//         res += i[j];
//       }
//     }
//   }
//   console.log(res);
// };
// checkTask();

// function checkTask(begin, end) {}
// checkTask(4, 8000);

// function checkTask(arr, deleteItems) {}
// checkTask(["good", "hello", 5], "good");


// Создайте функцию rgb(), которая будет принимать три числовых аргумента
// и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю.

// function rgb(a, b, c) {
//   return `rgb(${a === undefined ? 0 : a}, ${b === undefined ? 0 : b}, ${
//     c === undefined ? 0 : c
//   })`;
// }
// console.log(rgb());
// Напишите функцию, где пользователь вводит любое целое положительное число.
// А программа суммирует все числа от 1 до введенного пользователем числа.

// let sum = 0;
// const checkTask = function (num) {
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(checkTask(+prompt()));

// Напишите функцию, которая принимает на вход массив чисел
// и возвращает сумму всех элементов массива.

// function checkTask(arr) {
//   let sum = 0;
//   for (let i of arr) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(checkTask([1, 2, 3, 4, 5]));

// Создайте функцию, которая принимает массив строк и возвращает
// новый массив, содержащий только те строки, которые начинаются с заглавной буквы.

// const checkTask = function (arr) {
//   let newArr = [];
//   for (let i of arr) {
//     if (i[0] === i[0].toUpperCase()) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// };
// console.log(checkTask(["aa", "Bb", "Cc", "dD"]));

// Напишите функцию, которая принимает массив чисел и возвращает
// новый массив, содержащий только четные числа.

// function checkTask(arr) {
//   let result = [];
//   for (let i of arr) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(checkTask([1, 2, 3, 4]));

// Напишите функцию, которая принимает массив чисел и возвращает
// наименьшее и наибольшее число в массиве в виде массива из двух элементов.
// function checkTask(arr) {
//   let res = [];
//   let maxNum = 0;
//   let minNum = 0;
//   for (let i of arr) {
//     if (i > maxNum) {
//       maxNum = i;
//     } else if (i <= minNum) {
//       minNum = i;
//     }
//   }
//   res.push(maxNum, minNum);
//   return res;
// }
// console.log(checkTask([12, 5, 7, 9, 0]));

// Создайте функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий элементы исходного массива в обратном порядке.

// const checkTask = function (arr) {
//   return arr.reverse();
//   let newArr = [];
//   for (let i of arr) {
//     newArr.unshift(i);
//   }
//   return newArr;
// };
// console.log(checkTask([1, 2, 3]));

// Напишите функцию, которая принимает массив чисел и возвращает
// среднее арифметическое всех элементов массива.
// console.log(checkTask([1, 2, 3, 4]));
// function checkTask(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// Реализуйте функцию, которая принимает массив строк и возвращает новый массив,
// в котором каждая строка записана в верхнем регистре.
// const checkTask = function (arr) {
//   let result = [];
//   for (let i of arr) {
//     result.push(i[0].toUpperCase() + i.slice(1));
//   }
//   return result;
// };
// console.log(checkTask(["jhkj", "HJG", "jhjhjh"]));

// Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// в котором каждый элемент умножен на 2.
// console.log(checkTask([2, 3, 2]));

// function checkTask(arr) {
//   let sum = [];
//   for (let i of arr) {
//     sum.push(i ** 2);
//   }
//   return sum;
// }
// Создайте функцию, которая принимает массив строк и возвращает новый массив,
// содержащий только те строки, которые содержат более 5 символов.

// const checkTask = function (arr) {
//   let newArr = [];
//   for (let i of arr) {
//     if (i.length > 5) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// };

// console.log(checkTask(["hjh", "jhgjhghj", "bjhghhgh", "    r"]));

// "my gym";
// "tenet";
// "rotor";

// "islam";

// function limit(num) {
//     50
//     100
//     200
//     400
//     800
//     800
//     400
//     200
//     100
//     50
// }
// limit(2000);

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//   i++;
// }

// let arr = [1, 2, 5, 3, 4, 5];

// let i = 0;

// do {
//   if (i % 2 === 0) {
//     console.log(arr[i]);
//   }
//   i++;
// } while (i < arr.length);

// let j = 1;

// while (j > 10) {
//   console.log(j);
//   j++;
// }

// Задание №1
// Дан массив ["Sultan", "Azamat", "Eldar", "Islam", "Taalai"].
// Выведите в консоль имена Azamat и Islam с помощью цикла while

// let arr = ["Sultan", "Azamat", "Eldar", "Islam", "Taalai"];
// let newArr = [];
// let i = 0;
// while (i < arr.length) {
//   if (i % 2 !== 0) {
//     newArr.push(arr[i]);
//   }
//   i++;
// }

// console.log(newArr);
// Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла while

// let newArr = [];

// let i = 1;
// while (i <= 10) {
//   newArr.push(i);
//   i++;
// }
// console.log(newArr);

// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.

// let i = 50;
// while (i < 100) {
//   console.log(i);
//   i++;
// }

// Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.

// let i = 99;
// do {
//   console.log(i);
//   i--;
// } while (i >= 50);

// Задание №5
// Найдите самый длинный элемент массива и вывкдите в консоль

// let arr = ["pen", "pineapple", "apple", "pen"];
// let maxStr = "f     ";
// let i = 0;
// while (i < arr.length) {
//   if (arr[i].length < maxStr.length) {
//     maxStr = arr[i];
//   }
//   i++;
// }
// console.log(maxStr);

// Задание №6
// Так же найдите самый короткий элемент этого же массива

// Задание №7
// Выведите в консоль все элементы с четными индексами.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i in arr) {
//   if (i % 2 === 0) {
//     console.log(arr[i], "for in");
//   }
// }

// let j = 0;
// while (j < arr.length) {
//   if (j % 2 === 0) {
//     console.log(arr[j], "while");
//   }
//   j++;
// }

// let a = 0;
// do {
//   if (a % 2 === 0) {
//     console.log(arr[a], "do while");
//   }
//   a++;
// } while (a < arr.length);
// Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// let array = [
//   [1, 2, 9],
//   [3, 4, 9],
//   [5, 6, 9],
// ];

// for (let i of array) {
//   for (let j of i) {
//     console.log(j);
//   }
// }

// let i = 0;
// while (i < array.length) {
//   let j = 0;
//   while (j < array[i].length) {
//     console.log(array[i][j]);
//     j++;
//   }
//   i++;
// }

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// function limit(num) {
//   const newNum = num;
//   while (num <= 1000) {
//     console.log(num);
//     num *= 2;
//   }
//   while (num > newNum) {
//     num /= 2;
//     console.log(num);
//   }
// }
// limit(50);

// function limit(num) {
//   let i = 50;
//   while (i <= num) {
//     console.log(i);
//     i *= 2;
//   }
//   while (i > 50) {
//     i /= 2;
//     console.log(i);
//   }
// }
// limit(900000000);

// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом,
// в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево
// (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// function findPalindromItems(str) {
//   let two = str.split(" ").join("");
//   return (str = str.split("").reverse().join("").split(" ").join("") === two);
// }

// console.log(findPalindromItems("mygym"));

// "mygym" === "mygym";

// let a = "rf";

// let b = "fr";
// console.log(a === b);

// let a = "my gym gjhgj

// test(1, 2, 3);
// function test(a, b, c) {
//   console.log(...arguments);
// }

// arrow(1, 2, 3);
// const arrow = (a, b, c) => {
//   console.log(a + b / c);
// };

// console.log(this);

// let obj = {
//   name: "John",
//   age: 22,
// };

// let str = "Bill";
// console.log(str);

// console.log(obj.age);

let person = {
  name: "John",
  age: 10,
  work: ["HTML", "CSS", "JS"],
  car: {
    bmw: "X5",
    mers: "221",
  },
  price: true,
};
function checktask(arr) {
  let res = [];
  for (let i of arr) {
    res.push((i += " is cool"));
  }
  return {
    name: "John",
    age: 10,
    work: res,
    car: {
      bmw: "X5",
      mers: "221",
    },
    price: true,
  };
}
console.log(checktask(["HTML", "CSS", "JS"]));

// > Инженер 35-группа:
// Напишите функцию checkTask(arr), принимающую в аргументы
// массив состоящий из других массивов.
// Используя метод reduce(), найдите сумму всех элементов.
// Результат выведите в консоль.
// Например, для массива:
// [1,2, [4,5,6], [7,8]]
// Вывод будет:
// 33

// function checkTask(arr) {
// let res = [];
// for (let i of arr) {
//   if (typeof i === "number") {
//     res.push(i);
//   } else {
//     for (let j of i) {
//       res.push(j);
//     }
//   }
// }
// arr = res.reduce((acc, el) => {
//   return acc + el;
// });
// console.log(arr);

// let numArr = arr.flat();
// numArr = numArr.flat();
// console.log(numArr);
// numArr = numArr.reduce((acc, el) => acc + el);
// console.log(numArr);
// }
// checkTask([1, 2, [4, [5], 6], [7, 8]]);

// > Инженер 35-группа:
// Напишите функцию checkTask(arr), которая получает в качестве параметра массив.
// Функция должна перебрать все его элементы и вывести сам элемент, а также тип
// данных элемента - числовой, либо не числовой.
// К примеру, для массива:
// ['Молоко', -77, 11, 'Мед', -88]
// Вывод будет следующим:
// Молоко - не число
// -77 - число
// 11 - число
// Мед - не число
// -88 - число

// function checkTask(arr) {
//   let result = arr.map((el) => {
//     if (typeof el === "number") {
//       return `${el} - число`;
//     } else if (typeof el === "string") {
//       return `${el} - !число`;
//     }
//   });
//   result.forEach((el) => {
//     if (el !== undefined) {
//       console.log(el);
//     }
//   });
// }
// checkTask(["Молоко", -77, 11, true, "Мед", -88]);

// > Инженер 35-группа:
// Напишите функцию checkTask(arr), которая будет принимать массив из чисел.
// Ваша функция должна находить сумму чисел методом forEach(), методом reduce() и map().
// Для массива [5, 6, 7, 8, 9] вывод будет:
// forEach: 35
// reduce: 35
// map: 35

// function checkTask(arr) {
// let sum = 0;
// arr.forEach((el) => (sum += el));
// console.log(sum);
// let sum = arr.reduce((acc, el) => acc + el);
// console.log(sum);
//   let sum = 0;
//   arr.map((el) => (sum += el));
//   console.log(sum);
// }
// checkTask([5, 6, 7, 8, 9]);

// > Инженер 35-группа:
// Создайте функцию checkTask(arr), принимающую массив и элемент
// массива, и удаляет переданный элемент из массива.
// Например для аргументов [2, 5, 9, 6] и 5, вывод будет:

// function checkTask(arr, deleteItem) {
//   let result = arr.map((el) => {
//     if (el !== deleteItem) {
//       return el;
//     }
//   });
//   let newArr = [];
//   result.forEach((el) => {
//     if (el !== undefined) {
//       newArr.push(el);
//     }
//   });
//   console.log(newArr);

// let result = arr.filter((el) => el !== deleteItem);
// console.log(result);
// }
// checkTask([2, 5, 9, 6], 9);

// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ], задача: на все автомобили, которые старше 2007 года, поставить скидку
// 20%(для скидки использовать свойство 'sale')

// let cars = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];

// let result = cars.map((el) => {
// return {
//   mark: el.mark,
//   year: el.year,
//   price: el.year < 2007 ? el.price - (el.price * 2) / 10 : 0,
//   sale: el.year < 2007 ? "20% скидка" : "0% скидка",
// };
//   return {
//     mark: el.mark,
//     year: el.year,
//     price: el.price,
//     sale: el.year < 2007 ? el.price - (el.price * 2) / 10 : 0,
//   };
// });

// console.log(result);

// let person = [
//   {
//     name: "John",
//     price: 2000,
//     work: "IT-BACKEND",
//     salary: 20000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "BANK",
//     salary: 9000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "IT-FRONTEND",
//     salary: 15000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "JOURNALIST",
//     salary: 10000,
//   },
// ];

// let result = person.filter((el) => el.work.toLowerCase().includes("it"));
// console.log(result);

// Дан массив с объектами:
// let user = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];

// let result = user.map((el) =>
//   el.age >= 18 ? { message: `Hello, ${el.name}` } : el
// );
// console.log(result);

// задача: реализовать рассылку сообщений типа: 'Hello,
// [Здесь должно быть имя клиента],
// игнорировать клиентов, которым нет 18-ти лет

