let message = "Welcome to Thailand";

function logMessage(message) {
    message = "Hello everybody";
    console.log(message); // * Hello everybody เพราะ logMessage(message) ถูกแทนที่ด้วยการประกาศตัวแปรใหม่ message = "Hello everybody"
}

logMessage(message);
console.log(message); // ** Welcome to Thailand เพราะ logMessage(message) ไม่มีประกาศตัวแปร จึงเรียกใช้ตัวแปรประกาศจาก let message = "Welcome to Thailand" 


let name = "John";

function sayHi(input) {
    console.log(name); // *** John เพราะ name = input ดังนั้น sayHi(input)จึงไปเรียกใช้ค่าตัวแปรจาก let name = "John"
    name = input;
}

sayHi();
console.log(name); // **** John เพราะดึงค่าตัวแปรมาจาก scope ของ Global

