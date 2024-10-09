import createInt8TypedArray from './5-typed_arrays';

const view = createInt8TypedArray(10, 3, -5);
console.log(view.getInt8(3)); // Output: -5

console.log(createInt8TypedArray(10, 2, 89));
console.log(createInt8TypedArray(10, 0, 5).getInt8(0));
