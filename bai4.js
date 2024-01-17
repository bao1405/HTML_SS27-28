let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = arr.filter(function (element) {
    return element % 2 === 0;
});
let oddArray = arr.filter(function (element) {
    return element % 2 !== 0;
});
console.log("Mảng chẵn là:", evenArray);
console.log("Mảng lẻ là:", oddArray);