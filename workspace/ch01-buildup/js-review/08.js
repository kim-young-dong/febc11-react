// 지정한 수가 소수인지 여부를 반환
// var isPrime = function (num) {
//   console.time("소요 시간");
//   console.log("소수 판별 시작.", num);

//   // TODO: 소수 판별 코드
//   let prime = num > 1;

//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     if (num % i === 0) {
//       prime = false;
//       break;
//     }
//   }

//   console.log("소수 판별 결과.", prime);
//   console.timeEnd("소요 시간");
//   return prime;
// };

var isPrime = function (num) {
  console.time("소요 시간");
  console.log("소수 판별 시작.", num);
  // TODO: 소수 판별 코드
  let prime = num > 1;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  console.log("소수 판별 결과.", prime);
  console.timeEnd("소요 시간");
  return prime;
};

function memo(fn) {
  return function (args) {
    fn._cache = fn._cache || {};
    if (fn._cache[args] !== undefined) {
      return fn._cache[args];
    } else {
      return (fn._cache[args] = fn(args));
    }
  };
}

var isPrime = memo(isPrime);

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(1000000007);
isPrime(1000000007);
isPrime(1000000007);
