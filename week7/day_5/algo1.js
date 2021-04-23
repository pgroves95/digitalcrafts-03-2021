// What will the output produce? DO NOT RUN IN CONSOLE.
const array1 = [33, 4, 88, 1, 25];
console.log(array1.map((i) => i + 5).filter((i) => i % 2).length);
// map --> [38,9,93,6,30]
// filter --> [38,6,30]
// length --> 3