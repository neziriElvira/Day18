// Only chage code below this line
let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];

let uniqueValue = new Set(numberArray);
let uniqueArray = [];

for (item of uniqueValue) {
    uniqueArray.push(item);
}
uniqueArray.sort((a, b) => a - b);
console.log(uniqueArray);

// Only chage code above this line
module.exports = { numberArray, uniqueArray };
