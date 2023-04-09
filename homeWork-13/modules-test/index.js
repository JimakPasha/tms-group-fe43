// 5. Практика модулей

// - Создайте папку modules-test
// - Создайте index.html
// - Напишите любые 5-7 модулей
// - Напишите любые функции (на ваше усмотрение) в каждом из модулей
// - Каждый модуль по итогу, должен быть импортирован в один главный модуль index.js и там заиспользован
import { getTime, getDate } from '../modules-test/getDate.js';
console.log(`Время онлайн: ${getTime()}`);
console.log(`Дата онлайн: ${getDate()}`);


import { getName } from '../modules-test/getName.js';
console.log(`Имя: ${getName()}`);

import { getAge } from '../modules-test/getAge.js';
console.log(`дата рождения: ${getAge()}`);

import { getSum } from '../modules-test/getSumAge.js';
console.log(`общий возраст пользователей равен ${getSum()} годам`);




