// Function
// - fundamental building block in the program
// - subprogram can be used in multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('ㅎㅔㄹ로우');


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'cocoa';
}
const myChoice = { name: 'mandu' };
changeName(myChoice);
console.log(myChoice);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'pusan') {
    console.log(`${message} by ${from}`);
}
showMessage('See You!');


// 4. Rest parameters (added in ES6), 배열 형태로 전달
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 침고로 배열을 출력할 때
    for (const arg of args) {
        console.log(arg);
    }
    // 더 간단한 건
    args.forEach((arg) => console.log(arg));
}
printAll('I', 'Love', 'You');


// 5. Local scope
// "밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다."
// 밖에서는 지역 변수를 쓸 수 없고, 안에서는 전역 변수를 쓸 수 있다.
let globalMessage = 'global';  // global variable
function printMessage() {
    let message = 'hi';
    console.log(message);   // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);   // 이렇게 중첩된 함수에서 자식 함수가 부모 함수에 정의된 변수에 접근 가능한게 '클로저'
        let childMessage = 'hello';
    }
    printAnother();
    // console.log(childMessage);  // 에러
}
printMessage();
// console.log(message);   // 에러


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(3, 7);   // 3
console.log(result);
console.log(`sum: ${sum(1, 2)}`);
// 위의 5번 함수처럼 return이 없는 함수는 return undefined;가 들어있는 것과 같다.


// 실무 꿀팁
// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
        // 로직이 길어지면 중첩이 되며 가독성이 떨어짐
    }
}

// good
function upgradeUser(user) {
    // if와 else를 번갈아가며 쓰기보다는 조건이 맞지 않을 때 빠르게 return 하고, 조건 맞을 때만 필요한 로직 수행하는게 더 좋다.
    if (user.point <= 10) {
        return; // 조건이 맞지 않을 때, 값이 undefined인 경우, 값이 -1인 경우
    }
    // long upgrade logic...
}




// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function Expression, 함수가 1급 객체가 가능한 이유
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // 선언과 동시에 할당(함수 이름은 없쥬? anonymous function)
    console.log('print');
};
print();
const printAgain = print;   // printAgain도 위의 function을 가리키게 됨
printAgain();
const sumAgain = sum;
console.log(sumAgain(3, 9));

// Callback hell
// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {    // 이렇게 파라미터에 함수를 전달해서 호출하는 것을 '콜백함수'라고 함
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// 1) better debugging in debugger's stack traces 디버깅 시 스택 트레이스에 함수 이름이 나오게 하기 위해서
// 2) recursions 재귀
const printNo = function print() {
    console.log('no!');
    // print();  // recursions 재귀, 함수 안에서 스스로 호출할 때, 이렇게만 두면 무한 반복, 피보나치 등 사용처가 있을 떄 쓰자(프로그램 죽는다 ㅠㅠ, 콜 스택 꽉 찼다며 에러)
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous 항상 이름이 없다
const simplePrint = function () {   // 손대기 전
    console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint');   // 끝
const add = (a, b) => a + b;   // Arrow 버전
const add = function (a, b) {   // 다시 function Expression
    return a + b;
}
// 1) 간결함
// 2) 함수형 프로그래밍에서 요긴(배열, 리스트 등)
// 한 줄인 경우 위에서처럼 블럭 없이 작성가능하지만 조금 더 복잡한 상황일 땐
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};



// IIFE: Immediately Invoked Function Expression
function hello() {
    console.log('IIFE');
}

(function hello() {
    console.log('IIFE');
})();

// Fun Quiz Time
// function calculate(command, a, b)
// command에 따라서 a와 b 연산이 달라지는 함수
// command: add, substract, divide, multiply, remainder