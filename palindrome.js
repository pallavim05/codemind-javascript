function isPalindrome(str){
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');

}
const testStrings = ["madam", "141", "sunday", "mom", "listen", "dad"]; 

for (const str of testStrings) {
    if (isPalindrome(str)) {
        console.log(`Given string "${str}" is a palindrome.`);
    } else {
        console.log(`Given string "${str}" is NOT a palindrome.`);
    }
}
