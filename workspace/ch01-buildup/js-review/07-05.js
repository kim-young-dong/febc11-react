let arr = [4, 2, 8, 1, 5, 10, 7, 3, 9, 6];

let result = 0;

result = arr.reduce((sum, cur) => (cur % 2 !== 0 ? sum + cur : sum), result);

console.log(result);
