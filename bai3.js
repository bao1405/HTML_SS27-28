let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = arr.filter(function (element) {
    return element % 2 === 0;
});
console.log("Mảng mới sau khi xóa phần tử lẻ là:", newArray);