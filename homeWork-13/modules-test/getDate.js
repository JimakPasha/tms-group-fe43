const date = new Date();
export function getTime() {
   const hours = date.getHours();
   const min = date.getMinutes();
   return `${hours}:${min}`;
}
export function getDate() {
   const day = date.getDate();
   const month = date.getMonth() + 1;
   const year = date.getUTCFullYear();
   return `${day}.${month}.${year}`;
}

