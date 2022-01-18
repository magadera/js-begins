'use strict';

// 2. Variable, rw(read/write)
// - global 변수(전역 변수)들은 어플이 실행되어 종료될 때까지 항상 메모리에 탑재되어 있기에 최소한으로 쓰는 것이 좋다.
// 가능하면 클래스나 함수, if나 for loop 등 필요한 부분에서만 정의해서 쓰자
// - js에서 변수 선언 키워드는 let 하나 뿐
//   - ES6 전에는 var 썼었음(이젠 사용금지)
//   - 대부분의 언어에서는 변수를 선언하고 값을 할당하는 게 정상
//   - 하지만 js에서는 선언도 없이 값을 할당해버릴 수 있음(심지어 출력까지 가능)
//   - 이것을 'var hoisting' 이라고 함 - `끌어올려주다`
//   - move declaration from bottom to top
//   - 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말함
//   - has no block scope
//   - 블록을 철저히 무시해버림
//     - 아무리 블록 깊이 변수를 선언해도 밖에서 얼마든지 출력할 수 있음;;
//   - let으로 선언했을 시에는 선언 없이 할당하면 에러를 출력해줌!

// 3. Constant, r(read only)
// - 변수는 let
// - 상수는 const

// 4. Variable Types
// - js에서는 'number' 딱 하나 뿐이다.
// - 심지어 안써줘도 동작(dynamic)

// - primitive 타입, single item
//   - number, string, boolean, null, undefined, symbol
// - object 타입, box container, 너무 커서 메모리에 한번에 들어갈 수 없음
//   - ref(레퍼런스, 실제 오브젝트가 담겨있는 메모리를 가리키고 있는 곳)를 가리킴, 메모리에 저장되는건 ref.

const count = 22;
const size = 2.79;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number가 아닌 것들
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 5. String
// - 한 글자든 여러 글자든 'string' 타입으로 할당
const char = 'a';
const dudu = 'dudu';
const greeting = 'hi ' + dudu;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${dudu}!`; // template literals
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);


// 6. Boolean

// false: 0, null, undefined, Nan, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 명시적으로 텅텅 비어있는 empty값. 아무것도 아니다.
let nothing = null;
console.log(`value: ${nothing}, type: ${nothing}`);

// undefined
// 선언은 되어있지만 값이 없는 것
// 텅텅 비어있는지 값이 정해졌는지 아직 undefined
let x;
// let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
// create unique identifiers for objects
// 고유한 식별자가 필요한 상황일 때 쓰임
// string으로 식별자 사용하기도 하지만 두드러지는 차이점은

const symbol1 = Symbol('id'); // 동일한 값으로 만들었지만 두 심볼은 다르다
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// 심볼을 똑같이 만들고 싶다면
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true

// 그냥 출력하면 에러가 나오고 .description으로 string 변환
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// Dynamic Typing: dynamically typed language
// 정적 타입 언어와 다르게 할당된 값에 따라 타입이 변경
// 프로토타입 제작엔 유리하지만 프로그램 규모가 커지면 곤란해지는 상황이 존재
let text = 'good bye';
console.log(text.charAt(5));
console.log(`value: ${text}, type: ${typeof text}`);
text = 7;
console.log(`value: ${text}, type: ${typeof text}`);
text = 7 + '3';
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'3';
console.log(`value: ${text}, type: ${typeof text}`);

console.log(text.charAt(0));  // 런타임 에러(코드상엔 문제없음 ㄷㄷ)

// js는 미친게 분명하다 ㅎㅎ