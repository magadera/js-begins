// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// 오브젝트는 key와 value의 집합체이다.(보통 key로 접근)
// object = { key : value };

// 1. Literals and properties
// Primitive 타입은 변수 하나당 값을 하나만 담을 수 있쥬?
const name = 'ellie';
const age = 4;
// 출력 1
console.log(name, age);
// 출력 2
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}
// 근데 이렇게 하면 데이터 양이 많아졌을 때 수작업이 너무 많아짐

// 개선(오브젝트로 관리)
function printInfo(person) {
  console.log(person.name);
  console.log(person.age);
}
const ellie = { name: 'ellie', age: 20 }; // js는 클래스가 없어도 괄호{}를 이용해서 오브젝트를 생성가능
printInfo(ellie);

// 오브젝트 만드는 방법은 여러가지가 있다.
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

// 자! js는 Runtime(프로그램이 동작하고 있을 때)시기에 타입이 결정되는 '동적 타입 언어' 입니다.
// 그래서 다음과 같은 미틴 짓이 가능합니다.
// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;  // 뒤늣게 프로퍼티 추가;;
console.log(ellie.hasJob);  // true
// 이렇게 너무 동적으로 코딩하면 나중에 유지보수 힘들고 생각지 못한 에러 발생할 수 있음
// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);  // undefined


// 2. Computed properties
// 오브젝트 안에 있는 데이터에 접근하는 방법이 또 있다는 거쥐
// 주의점: key should be always string
console.log(ellie.name);  // 1) 점(.)을 이용해 접근
console.log(ellie['name']); // 2) 배열에서 데이터 받아오듯이 접근(Computed properties)

// 아까 위에서 .hasJob 삭제했지만
// 계산 프로퍼티 사용해서
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 점(.)문법은 코딩하는 그 순간 키에 해당하는 값을 받아올 때
// 계산 프로퍼티는 어떤 키가 필요한지 모를 때(런타임에서 결정될 때) 사용
// 일반적으로는 점(.)문법 쓰면 된다.
// 실시간으로 원하는 키 받아오고 싶다면 계산 프로퍼티 쓰고..
/* 예시
"언제 어떤 key를 받을지 모를 때..
key를 사용자에게 input을 받아 출력한다고 해보자
어떤 key가 출력될지 코딩시점에서는 알 수 없잖아"
*/
function printValue(obj, key) { // key에 상응하는 value를 출력하는 함수
  console.log(obj.key); // undefined
  console.log(obj[key]);  // ellie
}
printValue(ellie, 'name');
printValue(ellie, 'age'); // 20

// 내 생각엔 계산 프로퍼티는 좀 자세히 알아봐야겠다.


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 이런 방식으로 오브젝트 계속 만들어가기 너무 힘들다. name과 age도 반복되고.
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age) {  // 클래스와 같은 템플릿!
  return {
    name: name,
    age: age,
  };
}
// 여기서 Property value shorthand 기능으로
// key와 value가 동일하다면 하나로 생략가능하다.
function makePerson(name, age) {
  return {
    name,
    age,
  };
}


// 4. Constructor Function
// 어쨋거나 이렇게 다른 기능없이 순수하게 오브젝트 생성 함수들은
// 대문자로 시작하고, return 없이, this.name = name;처럼 쓰고
// 호출할 때도 클래스에서 오브젝트 만드는 것처럼 new Person('ellie', 30);
const person5 = new Person('mike', 27);
console.log(person5);
function Person(name, age) {
  // 생략된 과정을 주석 달자면
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당 오브젝트 안에 key가 있는지 없는지 확인
console.log('name' in ellie); // true
console.log('age' in ellie);  // true
console.log('random' in ellie); // false
console.log(ellie.random);  // undefined, 정의하지 않았으니까


// 6. for..in vs for..of

// for (key in obj)
// 오브젝트가 가지고 있는 key들이 하나씩 지역변수에 할당
console.clear();
for(key in ellie) {
  console.log(key);
}

// for (value of iterable)
// 오브젝트가 아니라 배열, 리스트 등 순차적으로 반복되는 친구들
const array = [1, 3, 5, 7];
// 예전 방식
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// 쉽게 가자
for(value of array) {
  console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user; // 같은 참조
user2.name = 'coder';
console.log(user);

// 오브젝트 복사 해보자
// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user); // 이런 방식도 ok
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size);  // big
// 뒤에 나오는 parameter일수록 앞에 동일한 프로퍼티가 있다면 값을 덮어씀