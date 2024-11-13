var arr = [10, 20, 30];

// 각 요소의 제곱값으로 구성된 새로운 배열 생성
var arr2 = [100, 400, 900];

// for 문을 사용한 배열 요소의 제곱값으로 구성된 새로운 배열 생성
for (var i = 0; i < arr.length; i++) {
  arr2[i] = arr[i] * arr[i];
}

// for of 문을 사용한 배열 요소의 제곱값으로 구성된 새로운 배열 생성
// for of 문은 배열 뿐만 아니라 유사 배열 객체와 이터러블 객체에도 사용할 수 있다.

for (var n of arr) {
  arr2.push(n * n);
}

// forEach 메서드를 사용한 배열 요소의 제곱값으로 구성된 새로운 배열 생성
arr.forEach(function (item) {
  arr2.push(item * item);
});

// map 메서드를 사용한 배열 요소의 제곱값으로 구성된 새로운 배열 생성
arr2 = arr.map(function (item) {
  return item * item;
});

// Arrow Function을 사용한 배열 요소의 제곱값으로 구성된 새로운 배열 생성
arr2 = arr.map((item) => item * item);

console.log(arr2); // [100, 400, 900]
