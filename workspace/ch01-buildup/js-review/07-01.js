let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = [];

arr.forEach((num) => num % 2 !== 0 && result.push(num));

console.log(result);
