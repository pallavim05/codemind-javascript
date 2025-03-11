var voteEligible = function(age) {
    if (age <= 0 || age >= 130) { 
        console.log(`Invalid data`);
       
    }
    
    if (age >= 18) {
        console.log(`Age is: ${age} eligible for vote`);
    } else {
        console.log(`Age is: ${age} not eligible for vote`);
    }
}

voteEligible(18);