// question 1
/*var q1 = () => {
    var date = Date(Date.now()).split(" ");
    var time = date[4].split(":");
    console.log(`Today is: ${date[0]}
Current Time is ${time[0]} PM : ${time[1]} : ${time[2]}`);


}

q1();
*/

// question 2
/* var q2 = () => {
     window.print();
 }

 q2();

*/

// question 3
/*var q3 = () => {
    let date = new Date(Date.now());
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    console.log(("0" + month).slice(-2) + "/" + day + "/" + year);

}

q3();
*/

// question 4
/*var q4 = (a, b, c) => {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(area);
}

q4(2, 3, 5);
*/

// question 5
/*var q5 = (guess) => {
    let x = Math.floor(Math.random() * 10);
    if (guess == x) {
        console.log('Good Work');
    }
    else {
        console.log('Not matched')
    }
    console.log(guess);
    console.log(x);
}
let guess = prompt('Guess a number');
q5(guess);
*/

// question 6
/*var q6 = (num1, num2) => {
    console.log(`The product is: ${num1 * num2}`);
    console.log(`The quotient is: ${num1 / num2}`);
}

let q61 = prompt('Input first number');
let q62 = prompt('Input second number');
q6(q61, q62);
*/

// question 7
/*let newObj = [];
var q7 = (n) => {
    newObj[n] = "new variable";
    console.log(`"${newObj[n]}" is the value of newObj[${n}]`)
}

var name = prompt('Give a name');
q7(name);
*/

// question 8
/*
let str = "abcdefghijklmnop";
var q8 = (str, pos) => {

    return str.substring(0, pos) + str.substring(pos + 1, str.length);
}
console.log(q8(str, 4));
*/

// uestion 9
/*
var q9 = (oldStr) => {
    let newStr = '';
    for (var i = 0; i < oldStr.length; i++) {
        newStr += String.fromCharCode(oldStr.charCodeAt(i) + 1);
    }
    console.log(newStr);
}
q9("abcdefgzZ");
*/

// question 10
/*
var q10 = (str) => {
    console.log(str.substring(1, str.length - 1));
}
q10("abcdefg");
*/

// question 11
/*
let arr = [2, 3, 4, 5, 6];
let arr1 = [1];
var q11 = (array) => {
    if (array.length <= 1) {
        console.log(`array is too short`);
    }
    else {
        let newArr = [array[0], array[array.length - 1]];
        return newArr;
    }
}

let newArr = q11(arr);
console.log(newArr);
let newArr1 = q11(arr1);
console.log(arr1);
*/

// question 12
/*
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 5, 3, 4, 2];
let arr3 = [1, 2, 4, 5, 3];
let q12 = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        console.log(`arrays are not of equal size`);
        return;
    }
    let count = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            if (count == 1) {
                console.log(`more than one swap required`);
                return;
            }
            for (var j = i + 1; j < arr2.length; j++) {
                if (arr[i] == arr2[j]) {
                    let temp = arr2[i];
                    arr2[i] = arr2[j];
                    arr2[j] = temp;
                    count++;
                    break;
                }
            }
        }
    }
    console.log(`The two arrays are similar`);
}

q12(arr, arr2);
q12(arr, arr3);
*/

// question 13
/*
let array = [1, 10, 45, 15, 53];
let q13 = (arr) => {
    let max = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff > max) {
            max = diff;
        }
    }
    console.log(max);
}

q13(array);
*/

// question 14
/*
let q14 = (x, y, r, a, b) => {
    distance = Math.sqrt(Math.pow(a - x, 2) + Math.pow((b - y), 2));
    if (distance > r) {
        console.log('Point is not in the circle');
    }
    else {
        console.log('Point is in the circle');
    }
}
let x = prompt('Center of circle x:');
let y = prompt('Center of circle y:');
let r = prompt('Radius of circle r:');
let a = prompt('Point to check a:');
let b = prompt('Point to check b:');
q14(x, y, r, a, b);
*/

// question 15
/*
let q15 = (b1, b2) => {
    if (b1 == true || b2 == true) {
        console.log(false);
    }
    else {
        console.log(true);
    }
}
q15(true, true);
q15(true, false);
q15(false, true);
q15(false, false);
*/

// question 16
/*
let q16 = (str) => {
    let x = str.split(" ");
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i].substring(0, 1).toUpperCase() + x[i].substring(1, x[i].length);
    }
    return x.join(" ");
}
console.log(q16("the quick brown fox"));
*/

// question 17
/*
let array = [0, 4, 6, 8, 9, 14, 16, 19, 20, 33];
let q17 = (arr, left, right, x) => {
    if (left > right) {
        console.log('not found');
        return;
    }
    var mid = Math.floor((left + right) / 2);
    if (arr[mid] == x) {
        console.log(`${x} is found`);
        return;
    }
    if (arr[mid] > x) {
        q17(arr, left, mid - 1, x);
    }
    else {
        q17(arr, mid + 1, right, x);
    }
}

q17(array, 0, 10, 8);
*/

// question 18
/*
function q18() {
    console.log(arguments.callee.name);
}
q18();
*/

// question 19
/*
let q19 = (check) => {
    if (typeof check == 'boolean') {
        console.log('This variable is a boolean');
    }
    else {
        console.log('This variable is not a boolean');
    }
}

q19(true);
q19("asdf");
q19(4);
*/

// question 20
/*
let q20 = (check) => {
    if (check instanceof Error) {
        console.log("This is an error");
    }
    else {
        console.log("This is not an error");
    }
}
q20(new Error('Somethings wrong'));
q20(true);
q20("1234");
*/

// question 21
/*
let q21 = (check) => {
    if (isNaN(check)) {
        console.log('This is not a number');
    }
    else {
        console.log('This is a number');
    }
}
q21(NaN);
q21("asdf");
q21(4);
*/

// question 22
/*
let q22 = (check) => {
    if (check === null) {
        console.log("this is null");
    }
    else {
        console.log("This is not null");
    }
}
q22(null);
q22(undefined);
q22(3);
q22("asdf");
*/

// question 23
/*
let q23 = (check) => {
    if (isNaN(check)) {
        console.log('This is not a number');
    }
    else {
        console.log('This is a number');
    }
}
q23(NaN);
q23("asdf");
q23(4);
*/

// question 24
/*
let q24 = (check) => {
    if (typeof check == "object") {
        console.log('This is an object');
    }
    else {
        console.log('This is not an object');
    }
}
q24(new Date());
q24("as");
q24(4234);
*/

// question 25
/*
let q25 = (jsonCheck) => {
    if (toString.call(jsonCheck) === '[object Object]') {
        console.log('This is a JSON');
        return;
    }
    console.log('This is not a JSON');

}
let jsonEX = {
    name: 'Mich',
    pass: 'password'
}
q25(jsonEX);
q25("asdf");
q25(24);
*/

// question 26
/*
let q26 = (regCheck) => {
    if (regCheck instanceof RegExp) {
        console.log('This is RegExp');
    }
    else {
        console.log('This is not');
    }
}

let value = /g+r/i;
q26(/rgah+y/i);
q26(24);
*/

// question 27
/*
let q27 = (charCheck) => {
    if (charCheck.match(/[a-z]/i) && charCheck.length == 1) {
        console.log('This is a char');
    }
    else {
        console.log('This is not');
    }
}
q27('a');
q27("ae");
*/

// question 28
/*
let q28 = (checkType1, checkType2) => {
    if (typeof checkType1 == typeof checkType2) {
        console.log('They are the same type');
    }
    else {
        console.log('They are not the same type');
    }
}
q28('asdf', 24);
q28('asdf', '234');
q28(12, null);
q28(null, null);
*/

// question 29
/*
let q29 = (obj) => {
    var names = Object.keys(obj);
    console.log(names.join());
}
let obj = {
    name: 'Michael',
    id: '1234',
    age: '21'
}
q29(obj)
q29(1234);
*/

// question 30
/*
let q30 = (obj, propertyName) => {
    console.log(obj);
    delete obj[propertyName];
    console.log(obj);

}
let obj = {
    name: 'Michael',
    id: '1234',
    age: '21'
}
q30(obj, "name");
*/

// question 31
/*
let q31 = (obj) => {
    var keys = Object.keys(obj);
    console.log(keys.length);
}
let obj = {
    name: 'Michael',
    id: '1234',
    age: '21'
}
q31(obj);
*/

// question 32
/*
let q32 = (obj) => {
    obj.map(book => {
        if (book.read == true) {
            console.log(`Already read '${book.name}' by ${book.author}`);
        }
        else {
            console.log(`You still need to read '${book.name}' by ${book.author}`)
        }
    })
}
let books = [
    {
        name: 'Bill Gates',
        author: 'The Road Ahead',
        read: true
    },
    {
        name: 'Steve Jobs',
        author: 'Walter Isaacson',
        read: true
    },
    {
        name: 'Mockingjay: The Final Book of the Hunger Games',
        author: 'Suzanne Collins',
        read: false
    }
]
q32(books);
*/

// question 33
/*
class Cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    volume() {
        console.log('The cylinder has volume: ' + (Math.PI * this.height * Math.pow(this.radius, 2)).toFixed(4));
    }
}

let cyl = new Cylinder(10, 2);
cyl.volume();
*/

// question 34
/*
let q34 = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
let unsorted = [10, 5, 7, 9, 4, 2, 1, 3];
q34(unsorted);
*/

// question 35
/*
let q35 = (str) => {
    let arr = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length + 1; j++) {
            arr.push(str.slice(i, j));
        }
    }
    console.log(arr);
}
q35("dog");
*/

// question 36
/*
class Clock {
    constructor() {
        this.curr_time = new Date();
        this.hour = this.curr_time.getHours();
        this.minutes = this.curr_time.getMinutes();
        this.seconds = this.curr_time.getSeconds();
    }
    run() {
        setInterval(() => {
            if (this.seconds == 60) {
                this.seconds = 0;
                this.minutes++;
            }
            if (this.minutes > 59) {
                this.minutes = 0;
                this.hours++;
            }
            if (this.hour > 23) {
                this.hour = 0;

            }
            console.log(this.hour + ":" + this.minutes + ":" + this.seconds++)
        }, 1000)
    }
}
let newClock = new Clock();
newClock.run();
*/

// question 37
/*
let q37 = (r) => {
    console.log('The area of the circle is: ' + Math.PI * r * r);
    console.log('The perimeter of the circle is: ' + Math.PI * 2 * r);
}
let r = prompt('What is the radius: ');
q37(r);
*/

// question 38 go back and do
// var library = [
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];
// let q38 = (arr) => {
//     arr.map(book => {

//     })
// }
// q38(library);

// question 39
/*
let q39 = (obj) => {
    console.log(Object.getOwnPropertyNames(obj).filter((props) => {
        return typeof obj[props] == "function";
    }));
}
q39(Math);
*/

// question 40
/*
let q40 = (url) => {
    let x = url.split(/[.|//]/);
    console.log(x);
}
q40('https://app.schoology.com/assignment/1942391208/assessment');
*/

// question 41
//dont know how to do

// question 42
/*
let q42 = (obj) => {
    let x = Object.keys(obj);
    let values = [];
    for (var i = 0; i < x.length; i++) {
        values.push(obj[x[i]]);
    }
    console.log(values);
}
let jsonEX = {
    name: 'Mich',
    pass: 'password'
}
q42(jsonEX);
*/

// question 43
/*
let q43 = (obj) => {
    let x = Object.keys(obj);
    let newObj = [];
    for (var i = 0; i < x.length; i++) {
        newObj.push([x[i], obj[x[i]]])
    }
    console.log(newObj);
}
let jsonEX = {
    name: 'Mich',
    pass: 'password'
}
q43(jsonEX);
*/

// question 44
/*
let q44 = (obj) => {
    console.log(obj);
    let newObj = {};
    for (var key in obj) {
        newObj[obj[key]] = key;
    }
    console.log(newObj);
}
let jsonEX = {
    name: 'Mich',
    pass: 'password'
}
q44(jsonEX);
*/

// question 45
/*
let q45 = (obj, prop) => {
    console.log(hasOwnProperty.call(obj, prop));
}
let jsonEX = {
    name: 'Mich',
    pass: 'password'
}
q45(jsonEX, "pass");
q45(jsonEX, "email");
*/

// question 46
/*
let q46 = (checkDOM) => {
    console.log(checkDOM instanceof Element);
}
x = document.createElement('span');
q46(x);
q46(345);
*/

// question 47
function q47() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}
q47();
// question 47-49 ????
