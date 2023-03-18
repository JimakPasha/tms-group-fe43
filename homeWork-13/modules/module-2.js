export function diffArrays(arr1, arr2) {
  const diff1 = arr1.filter((x) => !arr2.includes(x));
  const diff2 = arr2.filter((x) => !arr1.includes(x));
  const diff = diff1.concat(diff2);
  console.log(diff);
}