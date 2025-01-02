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

    console.log(word);
    // Elzero


console.log("----------------------");
console.log("-- ال تكليف 02 --");
console.log("----------------------");

let myString = "EElllzzzzzzzeroo";

let myStr = myString.split("").filter(function (char, index, ele) {
    return ele.indexOf(char) === index;
}).join("");
console.log(myStr);
// Elzero

console.log("----------------------");
console.log("-- التكليف 03 --");
console.log("----------------------");



console.log("----------------------");
console.log("-- التكليف 04 --");
console.log("----------------------");

