/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function (obstacles) {
  const d = [1, 0, 1];
  for (let i = 1; i < obstacles.length; i++) {
    let minCount = Infinity;
    for (let j = 0; j < 3; j++) {
      if (j === obstacles[i] - 1) {
        d[j] = Infinity;
      } else {
        minCount = Math.min(d[j], minCount);
      }
    }
    for (let j = 0; j < 3; j++) {
      if (j !== obstacles[i] - 1) {
        d[j] = Math.min(minCount + 1, d[j]);
      }
    }
  }
  console.log(d)
  return Math.min(d[0],d[1],d[2]);
};
console.log(minSideJumps((obstacles = [0, 1, 2, 3, 0])));
