import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Add: ', add(2, 7)); // 9
console.log('Subtract: ', subtract(10, 4)); // 6
console.log('Multiply: ', multiply(3, 8)); // 24

console.log('Uppercase: ', toUpperCase('hey there')); 
console.log('Lowercase: ', toLowerCase('HEY THERE')); 

console.log('Max: ', findMax([22, 25, 28, 31, 34, 37, 40])); // 40
console.log('Reversed: ', reverseArray([9, 6, 3])); // [3, 6, 9]

addAndLogUpper(10, 20); // 30

const numbers = [22, 25, 28, 31, 34, 37, 40]; // array
const maxNumber = findMax(numbers); 
const multipliedResult = multiply(maxNumber, 2); 
const finalResult = toUpperCase(multipliedResult.toString()); 

console.log('Final Result: ', finalResult); // 80