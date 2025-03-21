console.log("======= Task 1 log array element and index =========");
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element,index)=>{
    console.log(index,element);
    
});
console.log("======== Task 2 log positive numbers in array =========");
arrayNumbers.forEach((element)=>{
    if(element>0){
        console.log(element);
        
    }
});
console.log("======== Task 3 find negative numbers and add new array =========");
const negativeArray = [];
arrayNumbers.forEach((element)=>{
    if(element<0){
        negativeArray.push(element);
        
        
        
    }

});
console.log(negativeArray);
console.log("======== Task 4 find even numbers and add new array =========");
const evenNumbers = [];
arrayNumbers.forEach((element)=>{
    if(element%2==0){
        evenNumbers.push(element);
    }

});
console.log(evenNumbers);
console.log("======== Task 5 log all array elements sum  =========");
let sum = 0;
arrayNumbers.forEach((element)=>{
   return sum = sum + element;


});
console.log(sum);
console.log("======== Task 6 log even elements index  =========");
let evenNum = [];
arrayNumbers.forEach((element,index)=>{
    if(element%2==0){
        evenNum.push(index,element);
        
    }
});
console.log(evenNum);



