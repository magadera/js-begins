// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';
console.log(age);

// 2. Variable, rw(read/write)
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'hong';
    console.log(name);
    name = 'goodbye';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);


console.log(age);
age = 4;
var age;

// 3. Constant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const dayInWeek = 7


// 4. Variable Types
// primitive 타입, single item: number, string, boolean, null, undefined, symbol
// object 타입, box container, 너무 커서 메모리에 한번에 들어갈 수 없음. ref(레퍼런스, 실제 오브젝트가 담겨있는 메모리를 가리키고 있는 곳)를 가리킴, ref가 메모리에 저장된다구!

const count = 45;
const size = 13.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number가 아닌 것들
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 5. String
const char = 'C';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('vale: ' + helloBob + ' type: ' + typeof helloBob);

// 6. boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 명시적으로 텅텅 비어있는 empty 값. 아무것도 아니다.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 되어있지만 값이 없는 것
// 텅텅 비어있는지 값이 정해졌는지 아직 undefined
let x;
// let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
// create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// Dynamic typing: dynamically typed language
// 정적 타입 언어와 다르게 할당된 값에 따라 타입이 변경
// 프로토타입 제작엔 유리하지만 프로그램 규모가 커지면 곤란해지는 상황이 있다.
let text = 'hello';
console.log(text.charAt(0));    // h
console.log(`value: ${text}, type: ${typeof text}`);    // hello
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);    // 1
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);    // 75
text = 3 + '9';
console.log(`value: ${text}, type: ${typeof text}`);    // 39
text = '8' / '4';
console.log(`value: ${text}, type: ${typeof text}`);    // 2
console.log(text.charAt(0));   // 에러
// 자바스트립트 도랏..??
// 동적 언어는 다 이런가? 정적 언어 하다 온 입장에선 충격과 공포네..