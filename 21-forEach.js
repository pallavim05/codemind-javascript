const arrayNum = [20,30,50,60,70,80,90];
arrayNum.forEach((element,index,array)=>{
    console.log(element,index,array);
});

console.log("====Traverse set =====");
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.forEach((element)=>{
    console.log(element);
    
});
console.log("====Traverse map =====");
const myStudents = new Map();
myStudents.set(11,"Pallavi");
myStudents.set(12,"Nikita");
myStudents.set(13,"Neha");
myStudents.set(14,"Payal");
myStudents.forEach((value,key)=>{
 console.log(`${key} => ${value}`);
 
});