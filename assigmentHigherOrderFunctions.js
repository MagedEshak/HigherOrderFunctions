console.log("----------------------");
console.log("-- حل التكليفات --");
console.log("----------------------");

console.log("-- التكليف 01 --");
console.log("----------------------");

let mixin = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mixin
    .map(function (element) {
        return typeof element === "string" ? element : "";
    })
    .reduce(function (acc, current) {
        return `${acc}${current}`
    });

    console.log(word); // Elzero

console.log("----------------------");
console.log("-- ال تكليف 02 --");
console.log("----------------------");

let myString = "EElllzzzzzzzeroo";

let myStr = myString.split("").filter(function (char, index, ele) {
    return ele.indexOf(char) === index;
}).join("");

console.log(myStr); // Elzero

console.log("----------------------");
console.log("-- التكليف 03 --");
console.log("----------------------");

// My Solution without use Reduce fun
console.log("-- My Solution without use Reduce fun --");

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flattenArray = myArray.join("").split(",").map(ele => ele !== "," ? ele : "").join("");
console.log(flattenArray); // Elzero

// My Solution with use Reduce fun
console.log("-- My Solution with use Reduce fun --");

let flattennArray = myArray.reduce(function (acc, current) {
    return acc.concat(current);
}, []).join("");

console.log(flattennArray);  // Output: Elzero

console.log("----------------------");
console.log("-- التكليف 04 --");
console.log("----------------------");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let revesedNum = numsAndStrings.map(function (ele) {
    return typeof ele === "number" ? -ele : "";
}).filter(ele => ele);

console.log(revesedNum); // [-1, -10, 10, 20, -5, -3]

console.log("----------------------");
console.log("-- التكليف 05 --");
console.log("----------------------");

let numbs = [2, 12, 11, 5, 10, 1, 99];

let finalNum = numbs.reduce(function (accumulator, current) {
    return current % 2 === 0 ? accumulator * current : accumulator + current;
}, 1);
console.log(finalNum); // 500

console.log("----------------------");
console.log("-- Higher Order Functions Challenges --");
console.log("----------------------");

/*
    Higher Order Functions Challenges

    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only In The Code

    You Cannot Use
    - Numbers
    - Letters

    - You Must Use [Filter + Map + Reduce + Your Knowledge]
    - Order Is Not Important
    - All In One Chain

*/

// My Solution 
console.log("-- My Solution --");

let myStrin = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myStrin.split(",")
    .filter(ele => isNaN(parseInt(ele)))
    .map(function (ele) {
        if (ele === "Z") {
            return "";
        } else {
            return ele;
        }
    })
    .reduce(function (acc, current) {
        if (current === "EE") {
            return acc + "E";
        } else {
            return `${acc}${current}`;
        }
    },"");

console.log(solution); // Elzero_Web_School