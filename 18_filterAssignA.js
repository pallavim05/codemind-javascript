console.log(`======== Task1 print greater than 50 numbers =======`);
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const res = arrayNumbers.filter((element)=>{
    return element > 50 ;

});
console.log(`Array element greater than 50 : ${res}`);
console.log(`======== Task 2 Print even numbers ============`);
const evenNum = arrayNumbers.filter((element)=>{
    return element %2==0;
});
console.log(`Even Numbers : ${evenNum}`);
console.log(`======== Task 3 Print odd numbers ==========`);
const oddNum =  arrayNumbers.filter((element)=>{
    return element % 2 == 1;

});
console.log(`Odd Numbers : ${oddNum}`);
console.log(`========= Task 4 Print multiple 5 ==========`);
const fiveNum = arrayNumbers.filter((element)=>{
    return element % 5 == 0;
})
console.log(`Multiple 5 numbers : ${fiveNum}`);
console.log(`======== Task 5 print 20 to 50 between numbers ==========`);
const num = arrayNumbers.filter((element)=>{
    return element > 50 ;
})
console.log(`20 to 50 between numbers : ${num}`);







