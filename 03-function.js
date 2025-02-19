
// Type 1: function with no argument or parameter and no return value
function test(){
    console.log("test");
    
}
test(); // function call

// Type 2: Function with argument or parameter and no return value
function square(num){
    console.log(`Finding the square: ${num}`);
    var result = num*num;
    console.log(`square is: ${result}`);
    
}
square(8)

// Type 3: Function with argument or parameter and return value
 function addition(n1, n2, n3, n4) {
    console.log(`Numbers to add: ${n1}, ${n2}, ${n3}, ${n4}`);
    var result = n1+n2+n3+n4;
    return result;
    
    
 }
  var returnValue = addition(5, 7, 8, 9);
  console.log(`Addition is: ${returnValue}`);
  
function fullName(firstName,){

}
fullName("Pallavi","Asaram ","Mogare");