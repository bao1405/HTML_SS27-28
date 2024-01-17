let originalArray = ["apple", "banana", "orange", "kiwi", "banana", "grape", "orange", "kiwi", "watermelon"];
let lengthMap = {};
originalArray.forEach(function (element) {
    let length = element.length;
    if (!lengthMap[length]) {
        lengthMap[length] = [];
    }
    lengthMap[length].push(element);
});
let maxLength = Math.max(...Object.keys(lengthMap));
let longestArray = lengthMap[maxLength];
console.log("Mảng con chứa các phần tử phân biệt có độ dài lớn nhất là:", longestArray);
