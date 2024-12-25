console.log("1- Higher Order Functions – Map");
console.log("-".repeat(20));

let myNums = [2, 4, 6, 8, 10];
let nums = [];
for (let i = 0; i < myNums.length; i++) {
    nums.push(myNums[i] + myNums[i]);
}
console.log(nums);

// map

let addSelf = myNums.map(function (element, index, arr) {
    
    console.log(`element ${element}`);
    console.log(`index ${index}`);
    console.log(`Array ${arr}`);
    console.log(`this ${this}`);
    return element + element;
},10);
    console.log(addSelf);

console.log(`Arrow Fun
${"-".repeat(20)}`); 

let addSlf = myNums.map((e) => e + e);
console.log(addSelf);

console.log(` Fun
${"-".repeat(20)}`); 
function addition(e) {
    return e + e;
}

let add = myNums.map(addition);
console.log(add);

console.log("-".repeat(20));
console.log("2- Higher Order Functions – Map Practice");
console.log("-".repeat(20));



console.log("-".repeat(20));
console.log("3- Higher Order Functions – Filter");
console.log("-".repeat(20));


console.log("-".repeat(20));
console.log("4- Higher Order Functions – Filter Practice");
console.log("-".repeat(20));



console.log("-".repeat(20));
console.log("5- Higher Order Functions – Reduce");
console.log("-".repeat(20));



console.log("-".repeat(20));
console.log("6- Higher Order Functions – Reduce Practice");
console.log("-".repeat(20));



console.log("-".repeat(20));
console.log("7- Higher Order Functions – ForEach & Practice");
console.log("-".repeat(20));