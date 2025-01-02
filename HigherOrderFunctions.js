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

let swappingName = "MaGed EshAK";
let inertedNumbers = [1, -10, 50, -65, -89, 100];
let ignoreddNumbers = "M6843aG125ed";

let sw = swappingName.split("").map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");
console.log(sw);

let inv = inertedNumbers.map(function (ele) {
    return -ele;
});
console.log(inv);

let ign = ignoreddNumbers.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
}).join("");
console.log(ign);

console.log("-".repeat(20));
console.log("3- Higher Order Functions – Filter");
console.log("-".repeat(20));

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let FilterName = friends.filter(function (ele) {
    return ele.startsWith("A");
});
console.log(FilterName);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
let EvenNumbers = numbers.filter(function (ele) {
    return ele % 2 === 0;
});
console.log(EvenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

console.log("-".repeat(20));
console.log("4- Higher Order Functions – Filter Practice");
console.log("-".repeat(20));

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let sec = sentence.split(" ").filter(function (ele) {
    return ele.length <= 4;
}).join(" ");
console.log(sec);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";
let ig = ignoreNumbers.split("").filter(function (ele) {
    return !isNaN(parseInt(ele));
}).join(" | ");
console.log(ig);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixing = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele));
}).map(function (ele) {
    return ele * ele; // sq every index only
}).join(" | ");
console.log(mixing);


console.log("-".repeat(20));
console.log("5- Higher Order Functions – Reduce");
console.log("-".repeat(20));

let num = [10, 20, 15, 30];

let ad = num.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(`Current Element Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc + current);
    console.log(`#############`);
    return acc + current;
}, 5);

console.log(ad);

console.log("-".repeat(20));
console.log("6- Higher Order Functions – Reduce Practice");
console.log("-".repeat(20));

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars.filter(function (ele) {
    return ele !== "@";
  }).reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);

console.log("-".repeat(20));
console.log("7- Higher Order Functions – ForEach & Practice");
console.log("-".repeat(20));

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesn't Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});