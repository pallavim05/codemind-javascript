let fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`========= Task 1 Print first and last elements array ===========`);
let firstElement = fruits_seasonal[0];
console.log(`First element of array is: ${firstElement}`);
let lastElement = fruits_seasonal[fruits_seasonal.length-1];
console.log(`Last element of array is: ${lastElement}`);
console.log(`======== Task 2 Print Add element before element Banana ============`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
console.log(`========Task 3 Remove mango from array ==========`);
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log(`========= Task 4 Add element last position of array ==============`);
let lastPositionElement = fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
console.log(`======== Task 5 Add element Dragon before water melon ===========`);
fruits_seasonal.splice(4,0,'Dragon');
console.log(fruits_seasonal);
console.log(`========= Task 6 Replace element orange with kiwi ===========`);
fruits_seasonal.splice(2,1,'Kiwi');
console.log(fruits_seasonal);
console.log(`========Task 7 print element staring  from 1 to 4 index ==========`);
console.log(`Given array : ${fruits_seasonal}`);

let indexElement = fruits_seasonal.slice(1,4);
console.log(indexElement);
console.log(`========= Task 8 print last three element of array ==========`);
console.log(`Given Array : ${fruits_seasonal}`);
let threeElement = fruits_seasonal.slice(4,7);
console.log(`Last Three Element of array : ${threeElement}`);



















