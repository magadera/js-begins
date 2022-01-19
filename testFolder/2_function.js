'use strict';

// - 함수: 프로그램 안에서 각각의 작은 단위의 기능들을 수행하기에 sub-program이라고도 부름
// - fundamental building block in the program
// - subprogram can be used in multiple times
// - performs a task or calculates a value

// - function 선언하는 법
// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS (1급 객체)

function printHello() {
  console.log('hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('으하하하하핳하하하하하하');

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'cocoa';
}
const myChoice = { name: 'apple' };
console.log(myChoice);
changeName(myChoice);
console.log(myChoice);

// 3. Default Parameters (added in ES6)
function showMessage(message, from = 'pusan') {
  console.log(`${message} by ${from}`);
}
showMessage('chocolate');

// 4. Rest Parameters (added in ES6), 배열 형태로 전달
function printAll(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // for of 이용
  for(const arg of args) {
    console.log(arg);
  }
  // 심플 forEach
  args.forEach(arg => console.log(arg));
}
printAll("Na", "San", "Da");

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// 밖에서는 지역 변수를 쓸 수 없고, 안에서는 전역 변수를 쓸 수 있다.
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log('1 ' + message);
  console.log('2 ' + globalMessage);

  // 이렇게 중첩된 함수에서 자식 함수가
  // 부모 함수에 정의된 변수에 접근 가능한게 '클로저'
  function printAnother() {
    console.log('3 ' + message);
    let childMessage = 'so so';
  }
  printAnother();
  // console.log(childMessage);  // 에러

}
printMessage();
// console.log(message); // 에러

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(12, 7);
console.log(result);
console.log(`sum: ${sum(5,6)}`);
// 위의 5번 함수처럼 return이 없는 함수는 return undefined;가 들어있는 것과 같다.

// - 실무 꿀팁
// 7. early return, early exit
// 나쁜 예시
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
    // 로직이 길어지면 중첩이 되며 가독성 떨어짐
  }
}

// 좋은 예시
function upgrade(user) {
  // if와 else를 번갈아 쓰는 것 보다는 조건이 맞지 않을 때 빠르게 return하고
  // 조건 맞을 때만 필요한 로직 수행하는게 더 좋다.
  if (user.point <= 10) {
    return; // 조건이 맞지 않을 때 or 값이 undefined인 경우, 값이 -1인 경우
  }
  // long upgrade logic
}


// Function Expression
// 1급 객체 나오나요?
// First-class function
// function are treated like any other value
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function
// - 함수가 1급 객체가 가능한 이유
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it
const print = function () { // 선언과 동시에 할당(함수 이름이 없음, anonymous function)
  console.log('print');
};
print();
const printAgain = print; // printAgain도 위의 function을 가리키게 됨
printAgain();
const sumAgain = sum;
console.log(sumAgain(3,2));

// - function declaration과 function expression의 차이점
// (1) `expression`은 할당된 다음부터 호출이 가능
// a function expression is created when the execution reaches it
// show();  // 에러
const show = function () {
  console.log('show');
};

// (2) `declaration은 호이스팅이 된다.
// a function declaration can be called earlier than it is defined (hoisted)
// 선언되기 전에 호출해도 js엔진이 선언된 것을 가장 위로 올려줌
subtract(5,7);  // 호출 가능(호이스팅)
console.log(subtract(5,7));
function subtract(a, b) {
  return a - b;
}


// - Callback Hell
// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('예쓰!');
  // printYes(); // 재귀, 무한반복, 따로 처리 안하면 프로그램 죽는다.(콜 스택 꽉 참)
}

const printNo = function print() {
  console.log('노노노');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow Function
// 항상 이름이 없다. always anonymous
const simplePrint = function () { // 손대기 전
  console.log('simple i like it');
}
simplePrint();
const simplePrint2 = () => console.log('simple i love it');
simplePrint2();
const add2 = (a, b) => a + b;
console.log(add2(5,6));
// 다시 function expression 해보면
const add3 = function (a, b) {
  return a + b;
}
// 1) 간결함!
// 2) 함수형 프로그래밍에서 요긴(배열, 리스트 등)
// 한 줄인 경우 위에서처럼 블럭 없이 작성가능하지만 조금 더 복잡한 상황일 땐
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
}
console.log(simpleMultiply(7, 7));


// - 진짜 마지막으로 IIFE
// 최근에 잘 쓰이지는 않지만 js에서 함수 바로 실행하고 싶을 때 유용
// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 호출해봅시다.
function hello() {
  console.log('IIFE');
}

(function hello() { // 소괄호로 감싸서 (); 실행
  console.log('IIFE');
}) ();


// Final Quiz
// command에 따라서 a와 b 연산이 달라지는 함수
function calculate(command, a, b) {
  switch(command) {
    case 'add':
      console.log(`add: ${a + b}`);
      break;
    case 'subtract':
      console.log(`subtract: ${a - b}`);
      break;
    case 'divide':
      console.log(`divide: ${a / b}`);
      break;
    case 'multiply':
      console.log(`multiply: ${a*b}`);
      break;
    case 'remainder':
      console.log(`remainder: ${a%b}`);
      break;
    default:
      console.log('i don\'t know anymore');
      throw Error('unknown command');
      break;
  }
}
calculate('add', 23, 6);
calculate('subtract', 23, 6);
calculate('divide', 23, 6);
calculate('multiply', 23, 6);
calculate('remainder', 23, 6);
calculate('qewrgagae', 23, 6);

// Fun Quiz Time
// function calculate(command, a, b)
// command에 따라서 a와 b 연산이 달라지는 함수
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch(command) {
    case 'add':
      console.log(`add: ${a + b}`);
      break;
    case 'subtract':
      console.log(`subtract: ${a - b}`);
      break;
    case 'divide':
      console.log(`divide: ${a / b}`);
      break;
    case 'multiply':
      console.log(`multiply: ${a*b}`);
      break;
    case 'remainder':
      console.log(`remainder: ${a%b}`);
      break;
    default:
      console.log('i don\'t know anymore');
			throw Error('unknown command');
      break;
  }
}
calculate('add', 23, 6);
calculate('subtract', 23, 6);
calculate('divide', 23, 6);
calculate('multiply', 23, 6);
calculate('remainder', 23, 6);
calculate('qewrgagae', 23, 6);
// 정해진 데이터를 이용할 때는 if문보다 switch문이 더 좋다.
