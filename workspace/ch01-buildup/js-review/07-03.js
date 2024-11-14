let arr = [4, 2, 8, 1, 5, 10, 7, 3, 9, 6];

let result = 0;

result = arr
  .sort((a, b) => a - b)
  .find((num) => num % 2 === 0 && num % 3 === 0);

console.log(result);
