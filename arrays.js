let printNames = ["Joe", "Lauren", "Luna"];

console.log(printNames.length)
console.log(printNames[1])
printNames = printNames.concat("Jake")
console.log(printNames)
  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach((number) => {
  let total = sum += number
  console.log(total)
});