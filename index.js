// Write your solution here!
// First, we're going to create four arrays of pets. Define 4 `const` called:
// `append`, `prepend`, `removeLast` and `removeFirst`, and set all to an initial
// value of `["Milo", "Otis", "Garfield"]`. These are the `array`s that we'll work
// with for each exercise.
const pets = ["Milo", "Otis", "Garfield"];
const append = pets;
const prepend = pets;
append.push('Odie');
prepend.unshift('Odie');
// const removeLast = pets;
// removeLast.pop();
// const removeFirst = pets;
// removeFirst.shift();