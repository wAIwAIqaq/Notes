/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const map = new Map();
  logs.forEach((item) => {
    if (map.has(item[0])) {
      map.get(item[0]).add(item[1]);
    } else {
      map.set(item[0], new Set([item[1]]));
    }
  });
  const result = new Array(k).fill(0);
  [...map.values()].forEach((item) => {
        result[item.size - 1]++
  });
  return result
};

findingUsersActiveMinutes(
  [
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3],
  ],
  5
);
