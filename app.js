// Function #1: Array Slice

// var foods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
// let modifiedfoods = foods.slice(1, 4);
// console.log(modifiedfoods);

// // Function #2: Array Splice
// var newfoods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
// newfoods.splice(2, 0, "icecream", "fingerchips");
// console.log(newfoods);

// Function #3: Filter

// const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
// let evennum = numberArray.filter(function(num) {
//     return num % 2 == 0;
// });
// console.log(evennum);

// Function #4: Reject



// Function #6: Map

// const myArray = [11, 34, 20, 5, 53, 16];
// var squarednum = myArray.map(function(item) {
//     return item * item;
// });
// console.log(squarednum);


// Function #7: Reduce

// const myArray = [11, 34, 20, 5, 53, 16];
// var squarednum = myArray.map(function(item) {
//     return item * item;
// });
// console.log(squarednum);
// let sum = squarednum.reduce(function(initial, item) {
//     return initial + item;
// });
// console.log(sum);

// compressed code
// let summed = myArray.map(function (myArray) {
//     return item * item
// }).reduce(function (initial, item) {
//     initial + item;
// }, 0);