/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 返回最小的花费代价使得这n户人家连接起来
 * @param n int n户人家的村庄
 * @param m int m条路
 * @param cost int二维数组 一维3个参数，表示连接1个村庄到另外1个村庄的花费的代价
 * @return int
 */
function miniSpanningTree(n, m, cost) {
  // 按照权重排序
  cost.sort((a, b) => a[2] - b[2]);
  let value = 0;
  // 构造成一个并查集
  const mark = new Array(n).fill(0).map((_, index) => index);
  let edge = 0;
  function getParent(i) {
    if (mark[i] === i) {
      return i;
    } else {
      return getParent(mark[i]);
    }
  }
  function setMark(i, j) {
    const iP = getParent(i);
    const jP = getParent(j);
    if (iP < jP) {
      mark[iP] = mark[jP];
    } else {
      mark[jP] = mark[iP];
    }
  }
  let i = 0;
  while (i < cost.length) {
    const [a, b, v] = cost[i];
    // 判断是否成环
    const aP = getParent(a);
    const bP = getParent(b);
    if (aP !== bP) {
      setMark(aP, bP);
      value += v;
      edge++;
    }
    if (edge === n - 1) {
      break;
    }
    i++;
  }
  return value;
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
