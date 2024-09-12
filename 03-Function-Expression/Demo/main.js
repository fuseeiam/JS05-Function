// console.log('anonymous');

//#1 : Name fn, FN Declaration
//function and () {}

//#2 : Anonymous
//IIFE : Intermediate Invoke Function Expreeion => ประหยัดพื้นที่

// (function (x, y) {
//     console.log(x + y);
// })(10, 5);

// console.log(
//     (function (x, y) {
//         return x + y;
//     })(10, 5)
// );

// let a = (function (x, y) {
//     return x + y;
// })(10, 7);
// console.log(a);

//2B

// //Variable = expression
// let myVar = ((5 * 2 * 20) / 2) % 7;

// //Variable = FN (FN == Expression)
// //Assign anonymous FN to Variable
// const myFunc = function (x, y) {
//     return x + y;
// };
// console.log(myFunc(5, 10));

// //Assign named FN to Variable
// const a = console.log; //=> console.log คือตัวแปรที่มีชื่อ
// a('Hi');
// //=> anssign ให้ตัวแปร ไม่ว่าตัวแปรจะมีชื่อหรือไม่

//A : Shortset
// let a = function (x) { return x ** 2; };
// let a = x => x + 2;

//B : Bracket
// let b = (x) => x ** 2;
let b = (x, y) => x + y;
// b(4, 6)



//C : ต้องมี return 
// let c = (x , y) => {
//     let result = x + y;
//     return result;
// };

// console.log(a(3));
console.log(b(3, 5));