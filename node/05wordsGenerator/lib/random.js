export function randomInt(min, max) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

export function createRandomPicker(arr){
   arr  = [...arr];
   function randomPick(){
        const len = arr.length - 1;
        const index = randomInt(0, len);
        [arr[index], arr[len]] = [arr[len], arr[index]];
        return arr[index];
   }
   randomPick();
   return randomPick;
}
// const corpus = JSON.parse(data);
