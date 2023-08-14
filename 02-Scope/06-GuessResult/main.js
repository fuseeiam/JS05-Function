const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // * From Matt to Sarah เพราะ จาก function sendTo(from, to) และกำหนดตัวแปร const sender = 'Matt' จึงนำค่ามาแทนที่ในฟังก์ชั่นจึงได้ผลลัพธ์นี้

sendTo(null); // ** From null to undefined เพราะจาก function sendTo(from, to)  null มีการ Call แต่เป็นการกำหนดค่าด้วย null เพียงค่าเดียว จึงได้ผลลัพธ์เป็น null=${from} และค่าว่าง = Undefined จึงได้ผลลัพธ์นี้

// const sender = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // *** From CC to Max เพราะแทน function sendTo(to, from = 'CC') และ Max = ${to} จึงนำค่ามาแทนที่ในฟังก์ชั่นจึงได้ผลลัพธ์นี้
console.log(`From ${from} to ${to}`);
sendTo('Ben', 'Jay'); // **** From Jey to Ben จาก function sendTo(to, from = 'CC') แทนค่า ${to} = Ben และ ${from} =  Jey และ ${to} = Ben จึงนำค่ามาแทนที่ในฟังก์ชั่นจึงได้ผลลัพธ์นี้
