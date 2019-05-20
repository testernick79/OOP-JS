class Car {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }
    get make(){
        return this._make;
    }
    set make(value){
        const carOptions = ["Ford", "Chevy", "VW", "Audi"];

        if (carOptions.includes(value)) {
            this._make = value;
        } else {
            throw Error(value + "Please try again, Not valid make");
        }
        
    }
    get description() {
        return this._year + " " + this._make + " " + this._model;
    }
}

let myCar = new Car("VW", "Beetle", 2018);
//myCar.make = "Mercades";
console.log(myCar.description);