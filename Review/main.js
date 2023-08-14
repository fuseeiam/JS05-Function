/*review  
FN() fncall fnreturn fnresult
fn คือกล่องดำๆ
การเขียน fn มีสองรูปแบบ
1/ FN declaration / Named FN มีการกำหนดชื่อให้ Fn 

######Function nameOfFn(input) {logic}
1.1 define กำหนดชื่อ , input 
1.2 call =เรียกใช้ ทุกๆการเรียกทำให้ logi ใน {} ถูกรัน 1รอบ
sayHi('John'); พยายามส่ง str John เข้าไป ใน 
sayHi(name) { 
console.log(`${name}`);
}
ถ้าผู้ใช้งานต้องการใส่ input 2 ค่า ในparameter ต้องมี input 2 ค่า 
sayHi('John','Matt') -> Function nameOfFn(name,lastname)

1.3 Return ผลลัพธ์ที่ได้จากการ run FN จนเสร็จ 
add(5,6) === return value , FN Result
FN add(x,y) { 
let result = x+ y ;
return result;
}
add(5,6) -> ถูกรันแล้วหนึ่งรอบ ขณะ process จะมีเวลาในการ process  เมื่อ process Done 
add (5,6) === result === 11 จบและหายไป 
- let r = add(5,6) เมื่อ add done ตัวมัน (add) จะเท่ากับสิ่งที่มัน return เอาผลลัพ ของ add เก็บไว้ใน r
Reuse ได้ ถ้าใช้บ่อยแนะนำให้ใส่ใน ตัวแปร
- console.log(add(5,6)); -> one time use ไม่เปลือง Memory ในการเก็บตัวแปร
- fn isEven(n) {
        if(n % 2 == 0) { 
            return true ;
} else {  ไม่เขียน else ได้ if แบบไม่มี else ถ้าเจอ true จะไม่เข้า false 
            retunn false;
            return true; จะไม่เกิดเหตุ่การณืนี้ เพราะ return แล้วตัดจบเลย 
            console.log('i am done');จะไม่เกิดเหตุ่การณืนี้ เพราะ return แล้วตัดจบเลย 
}
console.log( isEven(5) );
ของที่จะ log ยัง process ไม่เสร็จ
isEven ใส่ 5 เข้าไป
5 / 2 ลงตัวไหม 
ถ้าไม่ลง
return false 

Fn ที่ return boolen สามารถใช้ สเตทเม้นตรงนี้ return ได้เลย  return n % 2 == 0
ใส่ 6 /2 เศษ == 0  // return true
// return 5 % 2 == 0 (false) 
evaluate n % 2 == 0 ก่อน แล้ว return 
//check point 
// ประกาศเป็น Declare ทำพร้อม input
// รับ input Params ทำพร้อม declare 
// เรียกใช้งาน Call
// เข้าใจ  Return  ถ้าไม่เขียน return = unDefiend 


//## FN Expression คือ สิ่งที่สามารถ evaluate(ประเมินค่า , หาค่า) เป็น sigle value ,combile ,FN result ได้

let a = 5 * 2 + 7;
//variable = expression
/* expression
- single value : 7
- combile : 7 + 2 
- FN result : add(7,2)
*/

let myFunc = add;
let z = console.log;
//Format : variable = FN (FN expression)
// FN Expression : การ assign Fn ให้กับ Variable

console.log(myFunc(5, 2));
z('Hi'); //z = console.log;

//Anonymous FN

//Syntax : FN Expression
// อธิบาย : กำลัง assign Anonymous FN ให้กับตัวแปร sayHello

const sayHello = function (name) {
    console.log('Hi' + name);
};

sayHello('Expression');


// 1. Function add() {}
// 2A. let add = function () {}  // ฝั่งขวา ไม่มีชื่อ = Anonymous FN
// 2B. let add = () => {}  // ฝั่งขวา ไม่มีชื่อ = Anonymous FN

const minus = (a, b) => {
    return a - b;
};

หรือ

// const minus = (a, b) => a - b;


const minusTwo = (a) => a - 2;
หรือ
// const minusTwo = a => a - 2;


//console.log(minusTwo(5));
//console.log(two);
หรือ
//console.log(minusTwo);
//console.log(two(5));



