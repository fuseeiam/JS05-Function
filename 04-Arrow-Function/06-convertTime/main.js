//Abstaction
//คิดก่อนว่าอะไรเป็น INPUT
//DAY + SEC

//1 DAY = 24 HR * 60 MIN * 60 SEC
//1 DAY = 24 * 60 * 60
//2 DAY = 2 * 1 DAY = 2 * 24 * 60 * 60
//3 DAY = 3 * 24 * 60 * 60

const HOUR_IN_DAY = 24;
const HOUR_IN_HOUR = 60;
const HOUR_IN_MIN = 60;

const convertDatToSec = (Day) => Day * HOUR_IN_DAY * HOUR_IN_HOUR * HOUR_IN_MIN;

