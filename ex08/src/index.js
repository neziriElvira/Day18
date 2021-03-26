//Only change code above this line
let one = [1, 2, 3, 4, 5];
let two = [6, 4, 3, 2];

let unionSet = new Set([...one, ...two]);
let intersectionSet = new Set([...one].filter((x) => two.includes(x)));
let differenceSet = new Set([...one].filter((x) => !two.includes(x)));
console.log(one);
console.log(two);
console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);

//Only change code above this line

module.exports = { unionSet, intersectionSet, differenceSet };

