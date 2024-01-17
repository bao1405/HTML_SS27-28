let arr = [5, 12, 7, 3, 20, 8, 15, 10];
let max_value = arr[0];
let min_value = arr[0];
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > max_value) {
        max_value = num;
    } else if (num < min_value) {
        min_value = num;
    }
}
console.log("Phần tử lớn nhất trong mảng là:", max_value);
console.log("Phần tử nhỏ nhất trong mảng là:", min_value);