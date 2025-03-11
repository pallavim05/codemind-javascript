const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`====== Task 1======`);
const addNum = arrayNumbers.map((num)=>{
    return num + 10;

})
console.log(`add 10 each number : ${addNum}`);

console.log(`====== Task 2 =======`);
const cubeNum =  arrayNumbers.map((num)=>{
    return num * num * num ;
})
console.log(`cube of each element of array : ${cubeNum}`);
console.log(`======= Task 3 =========`);
const arrayNum = arrayNumbers.map((num,index)=>{
    return  num + index;
})
console.log(`add numbers and index of number : ${arrayNum}`);





