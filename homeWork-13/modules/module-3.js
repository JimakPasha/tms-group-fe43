export function calcAvgAge(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur.age, 0);
    const avg = sum / arr.length;
    console.log(avg);
  }