// STAR PATTERN
// dynamics row => 1 for loop
// dynamics col => 1 for loop

// *
// **
// ***
// ****

// Prime Number
// ตัวตั้ง n (fixed)
// ตัวหาร dynamics => 1 LOOP

// n = 5 : 2 3 4
// n = 6 : 2 3 4 5
// n = 7 : 2 3 4 5 6

// let n = 7;
// let isPrime = true;

// for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log(n);

// DESIGN FN
// 1-INPUT ? => number ที่ใช้เช็ค
// 2-LOGIC IMPLEMENT ?
// 3-OUTPUT ? => boolean true,false
// number => bool

//function

function checkPoint(num) {
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}
if (isPrime) console.log(num);


checkPoint(17);
checkPoint(23);
checkPoint(24);


