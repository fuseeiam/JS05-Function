// function printPrime(limit) {
//     for (let n = 2; n <= limit; n++) {
//         //n = 2,3,4,5,...,limit
//         checkPrime(n);
//     }
// }
// printPrime(7);
// printPrime(13);
// printPrime(14);

// checkPrime(2);
// checkPrime(3);
// checkPrime(4);
// checkPrime(5);
// checkPrime(6);
// checkPrime(7);
// checkPrime(8);
// checkPrime(9);
// checkPrime(10);
// checkPrime(11);
// checkPrime(12);
// checkPrime(13);

// ABSTRACTION
// - simple ideas => one idea
// - hiding complexity
// - simple interaction


function isPrime(num) {
    for (let d = 2; d < num; d++) {
        // console.log(d);
        if (num % d == 0) {
            return false;
        }
    }

    return true;
}

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        if (isPrime(n)) {
            console.log(n);
        }
    }
}

printPrime(7);
printPrime(13);
printPrime(14);
