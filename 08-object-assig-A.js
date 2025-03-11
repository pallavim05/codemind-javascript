let professor = {
    name:"Ganesh Patil",
    age: 40,
    gender: "Male",
    salary:25000,
    subject:"marathi",
    degrees:{
        engineering:"CSC",
        PHD:'Adv Computing',
        MasterDegrees:"M.Tech"
    },
    course:['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming']
     
    
}

console.log(`------ Task 1 add property of object --------`);
console.log(professor);
console.log(`--------- Task 2 add degrees using nested object -------`);
console.log(professor.degrees);
console.log(`-------- Task 3 add one array certificates -------`);
console.log(professor.course);
console.log(`-------- Task 5 add new property totalExperience -------`);
professor.totalExperience = 10;
console.log(`totalExperience ${professor.totalExperience}`);


console.log(`------- Task 6 modify property`);
professor.age = 50;
console.log(professor);
console.log(`----- Task 7 add new certificate 2 of index of array`);
professor.course.splice(2,1,'Oracle Certified');
console.log(professor.course);
console.log(`----- Task 8 last element of array----`);
console.log(professor.course[professor.course.length - 1]);
console.log(`----- Task 9 complete object log using for in loop ------`);
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(element);
        
        
    }
}












