/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 返回最小的花费代价使得这n户人家连接起来
 * @param n int n户人家的村庄
 * @param m int m条路
 * @param cost int二维数组 一维3个参数，表示连接1个村庄到另外1个村庄的花费的代价
 * @return int
 */
//  不行，一个节点可以连通很多歌
function miniSpanningTree(n, m, cost) {
  let result = 0;
  const mep = new Map();
  //   const arr = new Array(n).fill();
  const arr = Array.from(new Array(n), () => {
    return new Array(n).fill(Infinity);
  });
  cost.forEach((item) => {
    arr[item[0] - 1][item[1] - 1] = item[2];
    arr[item[1] - 1][item[0] - 1] = item[2];
  });
  let next = arr[0].findIndex()
  for (let i = 1; i < arr.length - 1; i++) {
    const rest = arr[i].slice(i, n);
    const min = Math.min(...rest)
    result += min ;
  }
  return result;
}
miniSpanningTree(6, 10, [
  [5, 3, 8],
  [1, 3, 6],
  [2, 5, 4],
  [2, 3, 5],
  [4, 5, 6],
  [3, 4, 3],
  [2, 4, 8],
  [1, 2, 2],
  [1, 4, 5],
  [5, 6, 2],
]);
