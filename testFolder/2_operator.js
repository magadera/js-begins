'use strict';

// 연산자
// 1. String concatenation
console.log('my ' + 'son');
console.log('2' + 4);
console.log(`string literals: 1 + 8 = ${1+8}`);

// 2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(4*5);
console.log(9/7);
console.log(37%3);
console.log(4**4);

// 3. Increment and decrement operators
let count = 2;

const preIncrement = ++count;
console.log(`preIncrement: ${preIncrement}, count: ${count}`);  // 둘 다 3

const postIncrement = count++;
console.log(`preIncrement: ${preIncrement}, count: ${count}`);  // 3 그리고 4

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 > 6);  // greather than
console.log(10 <= 6); // less than or equal
console.log(10 >= 6); // greather than or equal

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or): finds the first truthy value
// 처음으로 true가 나오면 거기서 멈춘다(뒤는 보지도 않음)
// 즉, expression이나 함수 등은 가장 마지막에 호출하는 게 좋다!
console.log(`or: ${value1 || value2 || check()}`);

// &&(and): finds the first falsy value
// 처음부터 false 나오면 게임 끝
// and도 헤비한 operation은 뒤에 배치하는게 좋다
console.log(`and: ${value1 && value2 && check()}`);
// 간편하게 null 체크에도 쓰임
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('sorry');
  }
  return true
}

// !(not)
// 값을 반대로 써준다
console.log(!value1);


console.clear();
// 7. Equality
const stringFive = '5';
const numberFive = 5;

// ==: loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// ===: strict equality, no type conversion
// 가급적 strict으로 사용
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

console.log('\n');

// Equality 에서는 object 조심
// object equality by reference
// 오브젝트는 메모리에 저장될 때 ref(레퍼런스)형태로 메모리에 생성됨
const a1 = { name: 'apple'};
const a2 = { name: 'apple'};
// a1과 a2는 똑같은 데이터가 들어있는 오브젝트이지만,
// 실제 메모리에는 각자 다른 레퍼런스가 들어있다.(예를들면 ref1, ref2)
// 그리고 그 다른 레퍼런스는 서로 다른 오브젝트를 가리키고 있음
const a3 = a1;  // a3에는 a1의 레퍼런스가 할당되어 있음
console.log(a1 == a2);
console.log(a1 === a2);
console.log(a1 === a3);   // true, 같은 레퍼런스 값을 가지고 있음

console.log('\n');
// 퀴즈 타임
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined); // true
console.log(null === undefined);

// 조건문
// 8. Conditional Operators: if
// if, else if, else
const name = 'c';
if (name === 'a') {
  console.log('a');
} else if (name === 'b') {
  console.log('b');
} else {
  console.log('i don\'t know what you mean');
}

// 9. Ternary Operators: ? 삼항 연산자
// condition ? value1 : value2;
// 간단한 상황에서만 쓰기
console.log(name === 'a' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks (if, else if가 많아지면 고려)
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('i love you');
    break;
  case 'Firefox':
    console.log('not bad');
    break;
  default:
    console.log('same all!');
    break;
}


// 반복문
// 11. Loops
// 11-1: while loop, while the condition is truthy, body code is executed
let i = 3;
while(i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// 11-2: do-while loop, body code is executed first, then check the condition
i = 5
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// 11-3: for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
for(let i = 3; i > 0; i -= 2) {
  // inline variable declaration
  // for문 안에서 지역변수 선언해도 됨
  console.log(`inline variable for: ${i}`);
}

// nested loops
// 그런데 이렇게 하면 빅오가 O(n^2)이다. cpu에 좋지 않음
for(let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++){
    console.log(`i: ${i}, j: ${j}`);
  }
}


// 마지막 퀴즈(break, continue)
// Q1: iterate from 0 to 10 and print only even numbers (use continue)
for( i = 0; i < 11; i++) {
  if (i%2==0) {
    console.log(`${i}`);
  }
}

// Q2: iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(typeof `${i}`); // string
  console.log(typeof i);  // number
}