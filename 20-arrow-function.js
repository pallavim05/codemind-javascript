
// AF no arguments and no return type
let add=()=>{
    console.log("arrow function");
    
}
add();
// AF with arguments no return type
let additon =(p1,p2)=>{
    console.log(`addition is: ${p1+p2}`);
    
}
additon(10,20);

// AF with arguments and return type
let square = (num)=>{
    let result = num * num;
    return result;
}
const squareResult = square(5);
console.log(squareResult);

//WAF cube of number 7
 let cube = (num) =>{
    let cubeResult = num * num * num;
    return cubeResult;
 }
 const resultCube = cube(7);
 console.log(`Cube of 7 is : ${resultCube}`);
 
