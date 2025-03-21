function isSpaceCount(str)

{
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === ' '){
            count++;
        }
      
        
    }
    return count;


}
const firstString = isSpaceCount("“Revision is the mother of success");
console.log(`First string no of elements : ${firstString}`);
const twoString = isSpaceCount("“JavaScript is the language of internet world");
console.log(`Second string no of elements : ${twoString}`);

