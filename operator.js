// 1. String concatenation
console.log('my' + ' lion');
console.log('1' + 4);
console.log(`string literals: 1 + 8 = ${1 + 8}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(13 * 7); // multiply
console.log(5 / 4); // divide
console.log(8 % 3); // remainder 나머지
console.log(2 ** 7); // exponentiation

// 3. Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, count: ${counter}`);

const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, count: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greather than
console.log(10 >= 6);   // greather than or equal


// 6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 처음으로 true가 나오면 거기서 멈춘다(뒤는 보지도 않음)
// 즉, expression이나 함수 등은 가장 마지막에 호출하는게 좋다!
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// 처음부터 false 나오면 게임 끝
// and도 헤비한 operation을 뒤에 배치하는게 좋다
console.log(`and: ${value1 && value2 && check()}`);
// 간편하게 null체크에도 쓰임
// nullableObject && nullableObject.something

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('sorry');
    }
    return true;
}

// ! (not)
// 값을 반대로 바꿔준다
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
// 가급적 strict으로 사용
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

console.log('\n');

// equality 에서는 object 조심
// object equality by reference
// 오브젝트는 ref(레퍼런스)형태로 메모리에 탑재되잖아 사진 봐봐
const a1 = { name: 'apple' };
const a2 = { name: 'apple' };
const a3 = a1;
console.log(a1 == a2);
console.log(a1 === a2);
console.log(a1 === a3);


// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);


// 8. Conditional operators: if
// if, else if, else
const name = 'c';
if (name === 'a') {
    console.log('a');
} else if (name === 'b') {
    console.log('b');
} else {
    console.log('i don\'t know');
}

// 9. Ternary operator: ? 삼항 연산자
// condition ? value1 : value2;
// 간단한 상황에서만 쓰기
console.log(name === 'a' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks (if, else if 가 많아지면 고려)
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('go away!');    // ㅋㅋㅋㅋㅋㅋ
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i -= 2) {
    // inline variable declaration
    // for문 안에서 지역변수 선언해도 됨
    console.log(`inline variable for: ${i}`);
}

// nested loops
// 그런데 이렇게 하면 빅오가 O(n^2)이다. cpu에 좋지 않음
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (i = 0; i <= 10; i++) {
    if (i % 2 == 1) {
        continue;
    } else {
        console.log(i);
    }
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (i = 0; i <= 10; i++) {
    if (i > 8) {
        break;
    }
    console.log(i);
}