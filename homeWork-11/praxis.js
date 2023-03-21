console.log(1 && 'string' && null && 0 && 1);
// 1 && 'string' = 'string'; 'string' && null = null; null && 0 = null; null && 1 = null;
console.log(0 && 0 && 1);
// 0 && 0 = 0; 0 && 1 = 0;
console.log(0, null, '' || 5);
// 0 null '' || 5 = error; 0, null,  '' || 5 = 0 null 5
// 0 || 5 = 5;
// null || 5 = 5;
// '' || 5 = 5;
console.log(2 && 1 && null && 0 && '');
// 2 && 1 = 1; 1 && null = null; null && 0 = null; null & '' = null;
console.log(+'string', null, '' || 5);
// +'string'  null  '' || 5 = Error
// +'string' || 5 = 5;
// null || 5 = 5;
// '' || 5 = 5;
// console.log(null  2 && 3  4);
// null && 3 = null;
// null && 4 = null;
// 2 && 3 = 3;
// 2 && 4 = 4;
console.log(4, 2 && 3 && 4, 0);
// 4, 2 && 3 && 4, 0 = 4 4 0;
// 4 && 3 && 4 = 4;
// 4 && 3 && 0 = 0;
// 2 && 3 && 4 = 4;
// 2 && 3 && 0 = 0;
console.log(null,  '' && 0 && null && 'string',  0);
// null,  '' && 0 && null && 'string',  0 = null '' 0
// null && 0 = null; null && null = null; null && 'string' = null;
// '' && 0 = ''; '' && null = ''; '' && 'string' = '';
// null && 0 = null; null && null = null; null && 0 = null;
// '' && 0 = ''; '' && null = ''; '' && 0 = '';
