console.log("========= Task 1 ===========");

function squareOfWordLength(str){
    var strWord = str.length;
    console.log(`Given string is ${str} and its's length is : ${strWord}`);
    var result = strWord * strWord;
    return result;


}
var square = squareOfWordLength("JavaScript");
console.log(`Length square of word 'JavaScript' is : ${square}`);
console.log(`--------------------------------------------------------------`);

var square = squareOfWordLength("Google Chrome");
console.log(`Length square of word 'Google Chrome' is : ${square}`);
console.log(`--------------------------------------------------------------`);
var square = squareOfWordLength("Web Developer Smart");
console.log(`Length square of word 'Web Developer Smart' is : ${square}`);

console.log(`--------------------------------------------------------------`);

console.log("========= Task 2 ===========");

function wordShow(){
    var str = 'I am UI Developer';
    var result = str.length;
    var splitResult = str.split(" ");
    var splitLength = splitResult.length;
    console.log(`Length of given string is : ${result}`);
    console.log(`Split string result is : ${splitLength}`);
    console.log(`--------------------------------------------------------------`);
    var divideWord = result/splitLength;
    console.log(`The result of division string is : ${divideWord}`);
    var multiWord = result * splitLength;
    console.log(`The result of multiplication string is : ${multiWord}`);
    
    
        


}
wordShow();


