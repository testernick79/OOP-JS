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

// vwhicle class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
let myCar = new Vehicle("Ford", "Pinto", 1977);

console.log(myCar);

//First and Last name class
class Person {
    constructor(fNmae, lName, age) {
        this.fNmae = fNmae;
        this.lName = lName;
        this.age = age;
    }


    run() {
        console.log(this.fNmae + " " + this.lName + " is running!!");
    }

    walk() {
        console.log(this.lName + " " + this.fNmae + " is backwards!!");
    }

    greetings() {
        console.log(" Hello I'm " + this.fNmae + " " + this.lName);
    }
}

    let theGuy = new Person("Rick", "James");
    theGuy.run();
    theGuy.walk();
    theGuy.greetings();