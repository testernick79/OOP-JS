class Person {
    constructor(fName, lName) {
        this.fName =fName;
        this.lName = lName
    }
    greeting() {
        console.log("Hello my name is: " + this.fName + ".");
    }
}

class Student extends Person {
    constructor(studentID, fName, lName) {
        super(fName, lName);
        this.studentID = studentID;
    }
    studentInfo() {
        console.log(this.studentID + " " + this.fName + ", " + this.lName);
    }
}
let student = new Student(0001, "Larry", "Oyster-egg");
student.greeting();
student.studentInfo();