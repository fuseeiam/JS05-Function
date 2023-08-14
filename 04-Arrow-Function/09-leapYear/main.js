// หาร 4 ลงตัว => Leap year => true
// 1800 => false
// 1900 => false
// 2000 => true

// หาร 100 ลงตัว ไม่เป็น Leap Year ***ยกเว้น หาร 400 ลงตัว เป็น Leap Year
// ที่เหลือ หาร 4 ลงตัว เป็น Leap Year

// 1 Year == 1 รอบของการโคจรรอบดวงอาทิตย์ == 365.242199 Day

// 1 Year == 365.00(เศษ 0.242199)
// 2 Year == 365.00(เศษ 0.242199)
// 3 Year == 365.00(เศษ 0.242199)
// 4 Year == 365.00(เศษ 0.242199) + 1 Day (4 * 0.242199 == 0.96 เกิน 0.04)

// 25 ครั้ง ==> เกินไป 25 * 0.04 Day => 1 Day

//100 Year ไม่ควรชด

//isLeapYear : Year +> Boolean


//1#
// const isLeapYear = (year) => {
//     if (year % 4 === 0 && year % 100 != 0) {
//         return true;
//     } else if (year % 100 === 0 && year % 400 != 0) {
//         return false;
//     } else if (year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

//2#
// const isLeapYear = (year) => {
//     if (year % 400 == 0) {
//         return true;
//     } else if (year % 100 == 0) {
//         return false;
//     } else if (year % 4 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

//3# เหมือน 2
// const isLeapYear = (year) => {
// if (year % 400 == 0) {
//     return true;
// }
// if (year % 100 == 0) {
//     return false;
// }
// if (year % 4 === 0) {
//     return true;
// }
// return false;
// };

//4#
// const isLeapYear = (year) => {
//     if(year % 100 === 0){ //if เข้า 100 =>  400 ประเมิน
//         return year % 400 == 0; // return false
//     }
//     return year % 4 === 0; // true
// };

//5#
const isLeapYear = (year) => {
    return year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;
}

