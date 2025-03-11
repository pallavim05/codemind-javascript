const student = {
    name: "Jenny",
    city: "Pune",
    age: 24,
    pin: 411057,
    country: "India",
    isMarried: true
}

let { name, city, age, country="USA", isMarried, marks=0} = student; //destruturing defult value
console.log(name, city,age,country, isMarried);
console.log(marks);


const [n1, n2, n3="MyLove", n4=1]= ["Jenny", "Elon", "Stew"];
console.log(n1,n2,n3,n4);


const arrayMarks = [45, [90, 60], 70, 40, [ 8,9, [3, 0] ], ,7 ,  ,]
console.log(`Length : ${arrayMarks.length}`);

const flattenArray = arrayMarks.flat(2);
console.log(flattenArray);

const arrayWithEmptySlots = [45, , 70, 40, , ,7 ,  ,]
const res = arrayWithEmptySlots.flat();
console.log(res);