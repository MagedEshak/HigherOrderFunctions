console.log("----------------------");
console.log("-- حل التكليفات --");
console.log("----------------------");

console.log("-- التكليف 01 --");
console.log("----------------------");

let mixin = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mixin
    .map(function (element) {
        element = typeof element === "string" ? element : "";
        return element;
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



console.log("----------------------");
console.log("-- التكليف 04 --");
console.log("----------------------");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let revesedNum = numsAndStrings.map(function (ele) {
    ele = typeof ele === "number" ? -ele : "";
    return ele;
}).filter(ele => ele);

console.log(revesedNum); // [-1, -10, 10, 20, -5, -3]

console.log("----------------------");
console.log("-- التكليف 05 --");
console.log("----------------------");

let numbs = [2, 12, 11, 5, 10, 1, 99];

let finalNum = numbs.reduce(function (accumulator, current) {
    let ele = current % 2 === 0 ? accumulator * current : accumulator + current;
    return ele;
}, 1);
console.log(finalNum); // 500