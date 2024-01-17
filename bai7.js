let userInput = prompt("Nhập vào một chuỗi bất kỳ:");
let substrings = [];
for (let i = 0; i < userInput.length; i++) {
    for (let j = i + 1; j <= userInput.length; j++) {
        substrings.push(userInput.slice(i, j));
    }
}
console.log("Kết quả là:", substrings);