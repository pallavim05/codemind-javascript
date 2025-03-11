console.log(`====== Task 1======`);

class Vehical {
    constructor(name,color,model,price,numberPlate) {
        this.name =name;
        this.color = color;
        this.model = model;
        this.price = price;
        this.numberPlate =numberPlate;
        }
        Detail(){
            console.log(`Name : ${this.name}, color : ${this.color}, Model : ${this.model}, Price : ${this.price}, Number Plate :${this.numberPlate}`);
            
        }
}
const wargonR = new Vehical("Wagon r","white","ZXI Plus AT",300000,"MH-15 9054");
wargonR.Detail();
const thar = new Vehical("Thar","Black","",500000,"MH-15 9054");
thar.Detail();
const skoda = new Vehical("Skoda","Red","Skoda Superb",800000,"MH-17 9012");
skoda.Detail();
const swiftCar = new Vehical("Swift","white","ZXI Plus AT",500000,"MH-24 9067");
swiftCar.Detail();
const nanoCar = new Vehical("Nano","yellow","ZXI Plus AT",100000,"MH-15 9054");
nanoCar.Detail();

console.log(`======= Task 2=======`);
class College {
    constructor(name,university,location,ranking) {
        this.name = name;
        this.university = university;
        this.location = location;
        this.ranking = ranking;
        
    }
    display(){
        console.log(`College name : ${this.name}, University : ${this.university}, Location : ${this.location}, Ranking : ${this.ranking}`);
        
    }
}
const coepShow = new  College("COEP","Autonomus","pune","1");
coepShow.display();

const gpnCollege =  new College("Government Polytechnic Nashik","Autonomus","Nashik","2");
gpnCollege.display();
 
const kkwCollege = new College("KKW College","Pune University","Nashik","3");
kkwCollege.display();

const pdeaCollege = new College("Pdea College","Savitribai phule university","Pune",7);
pdeaCollege.display()


