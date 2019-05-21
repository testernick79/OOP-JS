//Create three new subclasses that inherit from the Employee parent class above:

class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

//  * Manager  
class Manager extends Employee {
    constructor(jobDescription, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.jobDescription = jobDescription;
    }
    jobDescription() {
        console.log("Welcome to the team : " + this.name + " As of : "  + this.hireDate + " Your salary is : " + this.salary 
        + " Based on : " + this.jobDescription);
    }
}

//  * Designer
class Designer extends Employee {
    constructor(yearsExperiance, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.yearsExperiance = yearsExperiance;
    }
    yearsExperiance() {
        console.log("Welcome to the team : " + this.name + " As of : "  + this.hireDate + " Your salary is : " + this.salary 
        + " You bring : " + this.yearsExperiance + " As a  Designer");
    }

}

//  * salesAssocite
class SalesAssociate extends Employee {
    constructor(degreeCompleted, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.degreeCompleted = degreeCompleted;
    }
    degreeCompleted() {
        console.log("Welcome to the team : " + this.name + " As of : "  + this.hireDate + " Your salary is : " + this.salary 
        + " Based on  the completion of your: " + this.degreeCompleted);
    }

}
let Manager = new Manager("Manages the West Division.", "Bob Ray", 120000, 5-20-2019);
let Designer = new Designer(14, "Sandy Hollow", 80000, 6-22-2018);
let SalesAssociate = new SalesAssociate("Masters", "Alex Smith", 55000, 4-21-2018);

employee.jobDescription();
employee.yearsExperiance();
employee.degreeCompleted();