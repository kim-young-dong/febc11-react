function f1() {
  console.log(`f1 작업 시작.`); // 2
  console.log(`f1 작업중...`); // 3
  // ......
  console.log(`f1 작업 종료.`); // 4
  return `f1의 결과물`;
}

function f2(f1Result) {
  console.log(`${f1Result}로 f2 작업 시작.`); // 5
  console.log(`f2 작업중...`); // 6
  // ......
  console.log(`f2 작업 종료.`); // 7
  return `최종 결과물`;
}

function test() {
  const f1Result = f1();
  console.log(f2(f1Result)); // 8
}

console.log("1. 테스트 시작."); // 1
test();
console.log("테스트 완료."); // 9
