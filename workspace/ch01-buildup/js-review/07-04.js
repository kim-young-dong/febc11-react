let arr = [4, 2, 8, 1, 5, 10, 7, 3, 9, 6];

let result = 0;

result = arr
  .filter((num) => num % 2 === 0 && num % 3 === 0)
  .sort((a, b) => a - b)[0];

console.log(result);
