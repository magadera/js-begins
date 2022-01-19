'use strict';

// Class
// - 조금 더  연관있는 데이터(필드, 메서드)를 한데 묶어놓은 컨테이너
class Person2 {
  name; // 속성(필드)
  age;
  speak() {};  //행동(메서드)
}
// 참고로 fields만 들어있는 class를 'data class'라고 한다.

// class는 템플릿(틀), 1번만 선언, no data in(이런 데이터가 들어올 수 있다고 정의만 함), 메모리에 올라가지 않음
// 여기다 data를 입힌게 object
// object는 클래스의 instance(피자붕어빵), created many items, data in, 메모리에 올라감

// 객체 지향 프로그래밍 OOP(Object-orinted programming)
// class: template
// object: instance of a class
// 자바스크립트의 class는 ES6에 도입
// - syntactical sugar over prototype-based inheritance

// - 클래스 도입 전에는 클래스 정의하지 않고 바로 오브젝트 만들 수 있었음
//   - function을 이용해 template 만들었음
// - 즉, js의 클래스는 완전히 새로운 것이 아니라 기존에 존재하던 프로토타입에 기반해 간편 문법만 추가된 것

// - 객체지향 언어로 프로그래밍 잘 하는 사람들은
// 풀어야 하는 문제와 기능들을 객체로 잘 정의해서 만들 수 있는 개발자를 말함

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: I can speak!`);
  }
}

// 오브젝트 생성
const minho = new Person('minho', 42);
console.log(minho.name);
console.log(minho.age);
minho.speak();

// - 제작자의 입장에서 OOP를 생각하자
// '커피 자판기(밴딩머신)' === Class
// '자판기에 있는 커피 개수' === Int numberOfCoffee
// 커피머신으로 무얼 하는가?
// 동전을 넣고 커피를 만든다.
// 즉, 커피머신에 있는 프로퍼티는
// numberOfCoffee
// putCoins
// makeCoffee

// 여기서 Int인 numberOfCoffee의 값이 -1이 되는게 맞을까?
// 안되지! 제일 작은게 0인데 -1은 말이 안되지!
// 그렇기에 우리가 'getter', 'setter'을 사용하는 것이다.
// 사용자가 멍청하게 -1이라고 설정하면 안되니까.
// 사용자가 -1이라고 설정해도 우리가(개발자) setter에서 0으로 설정해주는 것

// 자 그런데 애초에 다른 사람이 이 numberOfCoffee를 설정할 수 있는게 좋을까 안좋을까?
// 당연히 안좋지. 자판기 커피를 다른 사람이 수정한다니!
// 그치 그러니까 numberOfCoffee라는 프로퍼티를 `private`으로 만드는 것!
// 이게 바로 'encapsulation'이쥐

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // 값을 리턴
  get age() {
    return this._age;
  }

  // 값을 설정
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
class Experiment {
  // 생성자 없이 필드 정의
  publicField = 2;
  #privateField = 0;  // 외부에서 접근 불가
}
const experiment = new Experiment();
console.log(experiment.publicField);  // 2
console.log(experiment.privateField); // undefined

console.clear();
// 4. Static properties and methods
// 클래스는 '틀'이지만 static을 붙이면 클래스 자체가 가지고 있는 데이터가 됨
// 생성되는 오브젝트의 종류와 상관없이 항상 동일하게 반복 사용되는 필드, 메서드가 있다면?
// static을 사용해 메모리 사용량을 줄일 수 있다.
// static 키워드 --> 클래스 이름으로 호출
class Article {
  static publisher = '나라사랑 동기사랑';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher = () => console.log(Article.publisher);
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);  // undefined (static 선언이라 클래스 이름으로 호출하세요.)
console.log(Article.publisher);
Article.printPublisher();

// 상속, 그리고 다양성
// 도형을 그리자. 도형을 클래스로 정의하자.
// 너비, 높이, 색상 등이 공통적으로 필요하구나(반복)
// shape 클래스로 반복되는 것을 재사용하자

// 5. inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}  // 필드, 메서드 상속됨
class Triangle extends Shape {
  // 다양성, 필요한 것만 재정의(오버라이딩)해서 쓸 수 있다.
  draw() {
    console.log('이것은 삼각형이올씨다');
    // 만약 재정의하는 바람에 부모 클래스 필드, 메서드 못쓰는게 아쉽다면?
    super.draw();
  }
  getArea() {
    return (this.width*this.height)/2;
  }
}

const rect = new Rectangle(20, 20, 'blue');
rect.draw();
console.log(rect.getArea());  // 400

const tri = new Triangle(20, 20, 'red');
tri.draw();
console.log(tri.getArea()); // 200(재정의)


// 6. Class checking: instanceof
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스턴스인지 알랴줌
// 즉, 해당 클래스를 이용해 만들어졌는지 참, 거짓 리턴
console.log(rect instanceof Rectangle);
console.log(tri instanceof Rectangle);
console.log(tri instanceof Triangle);
console.log(tri instanceof Shape);
console.log(tri instanceof Object); // js의 모든 오브젝트는 Object를 상속한 것

// 여기서 Object의 타입은 Interface인데 스위프트의 프로토콜과 같다(정적 언어 타입에서 많이 쓰이는 개념)

