// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
// 오브젝트를 JSON으로 변환
let json = JSON.stringify(true);
console.log(json);  // true

// 이제 배열을 JSON으로
json = JSON.stringify(['apple', 'mango']);
console.log(json);  // ["apple","mango"] 이게 바로 JSON 규격사항

// 오브젝트를 JSON으로
const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol('id'),
  jump: () => {
    console.log(`${this.name} can jump!`);
  }
}

json = JSON.stringify(rabbit);
console.log(json);  // {"name":"tori","color":"white","size":null,"birthDate":"2022-01-20T06:38:50.152Z"}
// jump 함수는 JSON에 포함되지 않았는데
// 함수는 오브젝트에 있는 데이터가 아니기 때문이다.
// Symbol과 같은 js에만 있는 자체 데이터도 마찬가지

// 여기서 JSON 변환 과정을 좀더 통제하고 싶다면 옵셔널 콜백함수 사용
// 배열로 넘겨줘도 좋고 콜백함수로 컨트롤해도 좋다.
json = JSON.stringify(rabbit, ['name', 'size']);
console.log(json);  // {"name":"tori"}

console.clear();

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
})
console.log(json);

// 2. JSON to Object
// parse(json)
// JSON 데이터를 다시 오브젝트로!
console.clear();
json = JSON.stringify(rabbit);
console.log(json);  // {"name":"tori","color":"white","size":null,"birthDate":"2022-01-20T07:04:09.297Z"}
const obj = JSON.parse(json); 
console.log(obj); // {name: 'tori', color: 'white', size: null, birthDate: '2022-01-20T07:04:09.297Z'}

// rabbit 오브젝트에는 원래 jump라는 함수가 있었다.
rabbit.jump();
// 하지만 함수는 직렬화(serialization)할 때 포함되지 않았기에
// deserialization으로 다시 오브젝트로 돌아온 녀석은 함수가 없다.
// obj.jump(); // 에러 Uncaught TypeError: obj.jump is not a function


// 자, rabbit에는 또 birthDate라는 오브젝트가 있었지?
console.log(rabbit.birthDate.getDate());  // 20 오늘은 20일
// console.log(obj.birthDate.getDate()); // 또 에러 Uncaught TypeError: obj.birthDate.getDate is not a function
// 왜냐면 birthDate는 String 타입이거든!
console.log(obj.birthDate); // 2022-01-20T07:02:42.951Z
// JSON으로 만든 date String이 오브젝트에 할당된 것
// 오브젝트를 JSON으로 만들었을 때 birthDate는 String 형태로 만들어졌다.
// 이걸 다시 오브젝트로 파싱할 때도 String으로 할당.
// 하지만 처음 rabbit 오브젝트의 date는 Date 오브젝트 자체였다.(birthDate: new Date())
// 그래서(...) String이 아니라 Date로 다시 변환하려면 옵셔널 콜백함수를 사용해 세밀하게 컨트롤하자
// parse에 보니 reviver?라는 콜백함수가 있구만
console.clear();

json2 = JSON.stringify(rabbit);
console.log(json2);
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // key가 'birthDate'이면 새로운 Date 오브젝트를 만들거야
  return key === 'birthDate' ? new Date(value) : value;
})
console.log(obj2);

console.log(rabbit.birthDate.getDate());  // 20
console.log(obj2.birthDate);  // Thu Jan 20 2022 16:14:44 GMT+0900 (한국 표준시)
console.log(obj2.birthDate.getDate());  // 20