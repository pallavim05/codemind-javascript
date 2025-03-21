
class Vehicle {
    constructor(company, enginePower, yearMfg){
        this.company = company;
        this.enginePower = enginePower;
        this.yearMfg = yearMfg;
    }
    details(){
        console.log(`Company Name: ${this.company}, Engine Power: ${this.enginePower}, Year Mfg: ${this.yearMfg}`);
    }
}
class Car extends Vehicle{
    constructor(carType, company, enginePower, yearMfg){
        super(company, enginePower, yearMfg);
        this.carType = carType;
    }
}