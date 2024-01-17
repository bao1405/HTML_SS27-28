let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));
if (isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)) {
    console.log("Vui lòng nhập vào hai số nguyên.");
} else {
    let arr = [];
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        arr.push(i);
    }
    console.log("Mảng chứa tất cả các số trong khoảng giữa", a, "và", b, "là:", arr);
}