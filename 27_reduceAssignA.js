const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`======== Task 1 ========`);
const sumNum = array_numbers.reduce((runningTotal,element)=>{
    return runningTotal + element;

})
console.log(`sum of array element : ${sumNum}`);
console.log(`======= Task 2=======`);
const arrayNum = array_numbers.filter((element)=>{
    return element % 5 == 0;

})
console.log(`numbers: ${arrayNum}`);

 const sumNumbers = arrayNum.reduce((runningTotal,element)=>{
    return runningTotal + element;
 },0);
 console.log(`sum of 5 multiple numbers : ${sumNumbers}`);
 






