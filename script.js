// create the class with properties
class aClass {
    constructor(name, age, hair) {
        this.name = name;
        this.age = age;
        this.hair = hair;
    }
    sayName() {
        alert(this.name);
    }
    sayAge() {
        alert(this.age);
    }
    sayHair() {
        alert(this.hair);
    }
}

const myInstance = new aClass("Bob", 44);
myInstance.sayAge();
myInstance.sayName();
myInstance.sayHair();