// create function
function stringHandsOn() {
    console.log("**** Step 1 : Print given string ****");
    var str = "   Hey you are doing good, keep it up   ";
    console.log(`The given string is: ${str}`);
    console.log("**** Step 2: Calculate length of string ****");
    console.log(`Length of string is: ${str.length}`);
    console.log("**** Step 3: Extra spaces remove string ****");
    var result = str.trim();
    console.log(`The trim string is: ${result}`);
    console.log(`The trim string length is: ${result.length}`);
    console.log("**** Step 4: Count number of extra spaces ****");
    console.log(`The number of extra spaces in string count: ${str.length - result.length}`);
    console.log("**** Step 5: First and last character trim string ****");
    console.log(`First character of string is: ${result.charAt(0)} and last character of string is: ${result.charAt(result.length-1)}`);
    console.log("**** Step 6: Count total no of words trim string ****");
    var words = result.split(" ");
    console.log(`Total no of words trim string: ${words.length} : ${words}`);
    console.log("**** Step 7: Index of given string ****");
    console.log(`The good word index is: ${result.indexOf("good")}`);
    console.log("**** Step 8: substring 22  ****");
    console.log(`Substring staring from 22: ${result.substring(22)}`);
    console.log("**** Step 9: End with word up  ****");
    console.log(`The string end with word "up": ${result.endsWith("up")}`);
    console.log("**** Step 10: string start with word hey  ****");
    console.log(`The string  start with word "Hey": ${result.startsWith("Hey")}`);
    
    
    

    
    
    

    
    
    

    

    
}
stringHandsOn();