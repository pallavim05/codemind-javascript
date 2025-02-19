console.log("======== Task 1 ========");
function greaterNumber(n1,n2) {
    var result = n1 > n2 ? true : false;
    console.log(`Greatest number result is : ${result}`);
    
    
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("====== Task 2 ========");
function isEvenOddNum(num) {
    var result =  num%2==0 ? "Even" : "Odd";
    return result;
    
}
var returnValue = isEvenOddNum(29);
console.log(`Given no is : ${returnValue}`);
var returnValue = isEvenOddNum(44);
console.log(`Given no is : ${returnValue}`);
var returnValue = isEvenOddNum(0);
console.log(`Given no is : ${returnValue}`);
var returnValue = isEvenOddNum(101);
console.log(`Given no is : ${returnValue}`);

console.log("====== Task 3 =========");
function wordLength(word) {
    var result = word.length%2==0 ? "Even" : "Odd";
    return result;
    
}
var wordReturn = wordLength("JavaScript");
console.log(`Given word length is : ${wordReturn}`);
var wordReturn = wordLength("developer");
console.log(`Given word length is : ${wordReturn}`);
var wordReturn = wordLength("Google");
console.log(`Given word length is : ${wordReturn}`);
