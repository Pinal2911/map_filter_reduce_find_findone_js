var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//map example:
function double(x) {
  return x * 2;
}
const new_num = numbers.map(double);
console.log(new_num);

//Filter - Create a new array by keeping the items that return true.
//filter example:
function check(x) {
  return x > 10;
}
const new_filter = numbers.filter(check);
console.log(new_filter);

//Reduce - Accumulate a value by doing something to each item in an array.
//note anaonymous function is being used

const sum = numbers.reduce(function (accumlator, curr_num) {
  return accumlator + curr_num;
});
console.log(sum);

//Find - find the first item that matches from an array.
const ans = numbers.find(function (x) {
  return x > 10;
});
console.log(ans);

//FindIndex - find the index of the first item that matches.

const ans1 = numbers.findIndex(function (x) {
  return x > 10;
});
console.log(ans1);
