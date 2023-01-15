/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 返回最小的花费代价使得这n户人家连接起来
 * @param ranges array m条路
 * @return int
 */
function miniSolveCount(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  let start = findIncludesMax(ranges[0][0]);
  let end = Math.max(...ranges.map((item) => item[1]));
  let count = 1;
  while (findIncludesMax(start)) {
    start = findIncludesMax(start);
    count++;
  }
  function findIncludesMax(cur) {
    const includes = ranges.filter((item) => {
      return item[0] <= cur && item[1] > cur;
    });
    if (includes.length) {
      return includes.sort((a, b) => a[1] - b[1]).pop()[1];
    }
    return false;
  }
  if (start === end) {
    return count;
  } else {
    return -1;
  }
}
miniSolveCount([
  [1, 3],
  [2, 3],
  [1, 4],
  [2, 5],
  [5, 10],
  [6, 7],
]);
