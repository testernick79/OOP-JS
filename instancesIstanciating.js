class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        console.log(" Hello my name is " + this.name + " I am : " + this.age + " years old " );
    }
}
//Istanciating the new person
let bob = new Person("Bob", 77);
let alex = new Person("Alex", 33);
let fred = new Person("Freddy", 44);

//call the greeting
bob.greetings();
alex.greetings();
fred.greetings();