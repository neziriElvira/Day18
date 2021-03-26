// Only change code below this line

let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);

let arrKey = [];
for (let key of shoppingList.entries()) {
    arrKey.push(key[0]);
    console.log(`groceries: ${key[0]}`);
}

let arrValue = [];
for (let values of shoppingList.entries()) {
    arrValue.push(values[1]);
    console.log(`amount: ${values[1]}`);
}

for (let key of shoppingList.entries()) {
    console.log([key[0], key[1]]);
}

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };