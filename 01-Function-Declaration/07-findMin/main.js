//ให้สร้างฟังก์ชันชื่อ findMin มีพารามิเตอร์ 2 ตัว
//ให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

function min(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let minValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minValue) {
            minValue = numbers[i];
        }
    }

    return minValue;
}
