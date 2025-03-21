//AF no arguments and no return type
let msgShow = () =>{
    console.log("Good Morning, Today is Wednesday");
    
}
msgShow();

// AF with arguments and no return type
let multiplication = (n1,n2,n3=1) =>{
    console.log(`multiplication of 3 number : ${n1*n2*n3}`);
    
    
}
multiplication(5,5,2);
multiplication(10,4);

let show = (n1,n2,n3,n4,n5) =>{
    let result = n1+n2+n3+n4+n5;
    return result;
    

}
const additonResult = show(100,100,200,349,756);
console.log(`sum of given numbers : ${additonResult}`);
const stringResult = show("I am"," learning"," ES6"," features"," in depth");
console.log(`concat of given string : ${stringResult}`);

