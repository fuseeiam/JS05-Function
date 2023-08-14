ผลลัพธ์ในบรรทัดที่มี \*, **, \*** และ \*\*\*\* มีค่าเป็นอะไรและเพราะอะไร

```js
const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // * From Matt to Sarah
sendTo(null); // ** undefined เพราะ null คือค่าว่าง หรือค่าที่ไม่รู้ ผลจึงไม่ทราบค่านั้น
```

```js
const sender = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // *** From CC to Max
sendTo('Ben', 'Jay'); // **** From Jey to Ben
```
