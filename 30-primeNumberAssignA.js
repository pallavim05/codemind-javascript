const array = [3,9,7,6,19,29,53];
function isPrime(num){
    for (let i = 2; i < num; i++) {
        if(num%i==0){
            return false;
        }
        
    }
    return true;
}
for(let element of array) {
    console.log(`${element} is ${isPrime(element) ? 'prime number' : 'not prime number'}`);
    
  
}
