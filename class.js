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
cons 