let mark = 0;

let question1 = 4;
let question2 = 2;
let question3 = 15;
let question4 = 144;
let question5 = 3;
let question6 = 73;
let question7 = 0;
let question8 = 3;
let question9 = 62;
let question10 = 23;

let answer1 = prompt('2 + 2 = ?');
let answer2 = prompt('7 * 8 = ?');
let answer3 = prompt('18 - 9 / 3 = ?');
let answer4 = prompt('12 * 12 = ?');
let answer5 = prompt('1 + 1 + 1 + 1 * 0 = ?');
let answer6 = prompt('37 + 6 * 6 = ?');
let answer7 = prompt('81 - 9 * 9 = ?');
let answer8 = prompt('36 / 4 / 3 = ?');
let answer9 = prompt('70 - 40 / 5 = ?');
let answer10 = prompt('8 * 7 - 33 = ?');

if(question1 == answer1) {
    mark++;
}
if(question2 == answer2) {
    mark++;
}
if(question3 == answer3) {
    mark++;
}
if(question4 == answer4) {
    mark++;
}
if(question5 == answer5) {
    mark++;
}
if(question6 == answer6) {
    mark++;
}
if(question7 == answer7) {
    mark++;
}
if(question8 == answer8) {
    mark++;
}
if(question9 == answer9) {
    mark++;
}
if(question10 == answer10) {
    mark++;
}
console.log('result:', mark) ;



let loginname = "Ім'я";
let word = "ЛОГОС";

let login = prompt("Enter name");


if(loginname == login){
    let password = prompt("Enter password");
    if(password == word){
        console.log('Welcome')
    } else if(password == null){
        console.log('Enter cancelled')
    }else {
        console.log('Wrong password')
    }
}else if (login == null){
    console.log("Enter cancelled");
}else{
    console.log('i dont know you');
}

let question = +prompt("enter month")

if (question > 12){
    alert("not correct")
}else if (question > 11){
    alert("winter")
}else if(question > 8){
    alert("fall")
}else if(question > 5){
    alert("summer")
}else if(question > 2){
    alert("spring")
}else if(question > 0){
    alert("winter")
}else{
    alert("not correct")
}
