function isEven(num){
    console.log(`====== Ternary Operator ======`);
    var result = num%2==0 ? "EVEN" : "ODD";
    console.log(`Given number ${num} is ${result}`);
 }
 isEven(5);
 isEven(10);


 console.log(`==== Number is Positive or Negative =====`);
function isPositive(num){
    var result = num > 0 ? "Positive" : "Negative";
    console.log(`Given number ${num} is ${result}`);
}
isPositive(7);