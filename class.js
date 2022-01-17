'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
/*
클래스 도입 전에는 클래스 정의하지 않고 바로 오브젝트를 만들 수 있었다.
(function을 이용해 template을 만드는 방법이 있었음 - 다음 강의에서)
즉, js의 클래스는 완전히 새로운 것이 아니라 기존에 존재하던 프로토타입에 기반해서
간편하게 쓸 수 있도록 문법만 추가된 것
*/

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// 오브젝트 생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setters
class User {
    constructor(firstName, lastNamem, age) {
        this.firstName = firstName;
        this.lastName = lastNamem;
        this.age = age;
    }

    // 값을 리턴
    get age() {
        return this._age;
    }
    // 값을 설정
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1); // 나이를 실수로 -1로 설정
console.log(user1.age);

// 필드에 기호(_)가 들어간 age가 있지만 우리가 .age로 호출할 수 있는 것, .age에 값을 할당할 수 있는 것은
// 내부적으로 getter와 setter를 이용하기 때문



// 3. Fields (public, private)
// Too soon! 정말 최근에 추가되었습니다.(2020년 기준)

class Experiment {
    // 생성자 없이 필드 정의
    publicField = 2;
    #privateField = 0;  // 외부에서 접근 불가
}
const experiment = new Experiment();
console.log(experiment.publicField);    // 2
console.log(experiment.privateField);   // undefined


// 4. Static properties and methods
// Too soon! (역시 최신)
// 클래스는 '틀'이지만 static을 붙이면 클래스 자체가 가지고 있는 데이터가 됨
// 생성되는 오브젝트의 종류와 상관없이 항상 동일하게 반복 사용되는 필드나 메서드가 있다면? static을 사용해 메모리 사용량을 줄일 수 있다.
// static 키워드 --> 클래스 이름으로 호출
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // static을 사용하지 않았다면 오브젝트를 통해서 출력했을 것. static 선언한 것을 오브젝트를 통해서 호출하면 undefined(값이 지정되지 않음)가 뜬다.
console.log(Article.publisher);
Article.printPublisher(); // Dream Coding


// 상속, 그리고 다양성
// 도형을 그려볼까. 도형을 클래스로 정의해보자
// 너비, 높이, 색상 등이 공통적으로 필요하겠군(반복)
// shape 클래스로 반복되는 것들은 재사용하자

// 5. Inheritance
// a way for one class to extend another class.
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

class Rectangle extends Shape {}    // 필드, 메서드 상속됨
class Triangle extends Shape {
    // 다양성, 필요한 것만 재정의(오버라이딩)해서 쓸 수 있다
    draw() {
        console.log('△▲');
        // 그런데 오버라이딩하는 바람에 부모 클래스의 필드, 메서드 내용 못쓰는게 아쉽다면?
        super.draw();
    }
    getArea() {
        return (this.width * this.height) / 2;
    }    
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();   // 재사용
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());    // 오버라이딩 하면 정상값 출력


// 6. Class checking: instanceof
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스턴스인지 알랴줌(해당 클래스를 이용해 만들어진게 맞는지)
// 참, 거짓 리턴
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);     // true (Shape을 상속)
console.log(triangle instanceof Object);    // true (js의 모든 오브젝트는 Object를 상속한 것)
// Object는 Interface인데 스위프트의 프로토콜과 같다(정적 언어 타입에서 많이 쓰이는 개념)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference