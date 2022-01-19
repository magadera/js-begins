'use strict';

// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// 오브젝트는 key와 value의 집합체이다. (보통 key로 접근)
// object = { key : value };

// 1. Literals and Properties
// primitive 타입은 변수 하나당 값을 하나만 담을 수 있잖아.
const name = 'mike';
const age = 18;
console.log(name, age); // mike 18
print(name, age);
function print(name, age) {
  console.log(name);  // mike
  console.log(age); // 18
}

// 근데 이렇게 하면 데이터 양이 많아졌을 때 감당이 안됨

// 오브젝트로 관리해보자
// js는 클래스가 없어도 괄호{}를 이용해 오브젝트를 생성가능
const paul = { name: 'paul', age: 34 };
printInfo(paul);
function printInfo(person) {
  console.log(person.name);
  console.log(person.age);
}

// 오브젝트 만드는 방법은 여러가지가 있음
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

// js는 '동적 타입 언어'로 Runtime(프로그램이 동작하고 있을 때) 시기에 타입이 결정된다.
// 그래서 다음과 같은 미틴 짓을 볼 수 있다.
// with JavaScript magic (dynamically typed language)
// can add properties later
paul.hasJob = true; // 뒤늦게 프로퍼티 추가
console.log(paul.hasJob);
// 물론 이렇게 너무 동적으로 코딩하면 나중에 유지보수 힘들고 생각지 못한 에러 발생할 수 있음
// can delete properties later
delete paul.hasJob;
console.log(paul.hasJob); // undefined


// 2. Computed Properties
// 오브젝트 안에 있는 데이터에 접근하는 방법이 또 있다.
// 주의점: key shoul be always string
console.log(paul.name); // 1. 점(.)을 이용해 접근
console.log(paul['name']);  // 2. 배열에서 데이터 받아오듯이 접근(계산 프로퍼티)

// 아까 위에서 .hasJob 삭제했지만 다시 계산 프로퍼티 사용해서
paul['hasJob'] = true;
console.log(paul.hasJob); // true

console.clear();

// 점(.)문법은 코딩하는 그 순간 키에 해당하는 값을 받아올 때
// 계산 프로퍼티는 어떤 키가 필요한지 모를 때(런타임에서 결정될 때) 사용
// 일반적으로는 점(.)문법 쓰면 된다.
// 실시간으로 원하는 키 받아오고 싶다면 계산 프로퍼티 쓰고..
// - 언제 어떤 key를 받을지 모를 때..
// - key를 사용자에게 input을 받아 출력한다고 해보자
// 어떤 key가 출력될지 코딩시점에서는 알 수 없잖아

function printValue(obj, key) {
  console.log(obj.key); // undefined
  console.log(obj[key]);
}
printValue(paul, 'name');
printValue(paul, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'rawraw', age: 3 };
const person3 = { name: 'chuk', age: 4 };
// 이런 방식으로 오브젝트 계속 만들기 힘들다. 반복되는 것도 있고.
const person4 = makePerson('vovovo', 5);
console.log(person4);
function makePerson(name, age) {
  return {
    name: name,
    age: age,
  }
}
// property value shorthand로 줄이면
const person5  = makePerson2('gaga', 6);
console.log(person5);
function makePerson2(name, age) {
  return {
    name,
    age,
  }
}

// 4. 생성자 함수 Constructor Function
// 이렇게 다른 기능없이 순수한 오브젝트 생성 함수들은
// 대문자로 시작하고, return 없이, this.name = name;처럼 쓰고
// 호출도 클래스에서 오브젝트 만드는 것처럼 new Person('ellie', 20);

const person6 = new Person('deva', 55);
console.log(person6);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}


// 5. in operator: property existence check (key in obj)
// 해당 오브젝트에 key가 있는지 없는지 확인
console.log('name' in paul);
console.log('age' in paul);
console.log('odeng' in paul); // false
console.log(paul.odeng);  // undefined

// 6. for..in vs for..of

// 6-1. for(key in obj)
// 오브젝트가 가지고 있는 key들이 하나씩 지역변수에 할당
console.clear();
for(let key in paul) {
  console.log(key);
}

// 6-2. for(value of iterable)
// 오브젝트가 아니라 배열, 리스트 등 순차적으로 반복되는 친구들
const array = [1, 2, 3, 4];
// ole way
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// new way
for(let value of array) {
  console.log(value);
}

// 7. Fun Cloning
const user = { name: 'ellie', age: 9 };
const user2 = user;
user2.name = 'popo';
console.log(user);

// 오브젝트 클론
// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);  // 이런 방식도 ok
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size);  // big
// 뒤에 나오는 parameter일수록 앞에 동일한 프로퍼티가 있다면 값을 덮어씀