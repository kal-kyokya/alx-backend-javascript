import hasValuesFromArray from './7-has_array_values';

console.log(hasValuesFromArray(new Set([0, 7, 9, 8, 1, 2, 9, 0, 9, 5]), [0]));
console.log(hasValuesFromArray(new Set([0, 7, 9, 8, 1, 2, 9, 0, 9, 5]), [4000]));
console.log(hasValuesFromArray(new Set([0, 7, 9, 8, 1, 2, 9, 0, 9, 5]), [9, 7]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
