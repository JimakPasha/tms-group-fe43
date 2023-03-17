import { printPrimes } from './modules/module-1.js';
import { diffArrays } from './modules/module-2.js';
import { calcAvgAge } from './modules/module-3.js';
import { findPalindromes } from './modules/module-4.js';
import { factorial } from './modules/module-5.js';


const people = [
    { name: "John", age: 25 },
    { name: "Alice", age: 32 },
    { name: "Bob", age: 18 },
  ];

  
printPrimes([1,3,4,9,10,1.5,1.9,228,3.35]);
diffArrays(['Привет', null, 2, 4, 5] , [ 2, 15, 23, 'Привет']);
calcAvgAge(people);
findPalindromes('abba, kimiko, alla');
factorial(10);