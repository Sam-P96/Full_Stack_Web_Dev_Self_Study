let numArray = [3, 7, 6];

let [num1, num2] = numArray;

console.log(num1 + " " + num2)
console.log(numArray)

[num2, num1] = [num1, num2];

console.log(numArray)