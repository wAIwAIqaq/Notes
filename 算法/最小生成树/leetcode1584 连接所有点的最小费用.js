/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const allEdges = [];
  let i = 0;
  while (i < points.length) {
    const cur = points[i];
    let j = 0;
    while (j < points.length) {
      if (i !== j) {
        const other = points[j];
        const edge = [
          i,
          j,
          Math.abs(cur[0] - other[0]) + Math.abs(cur[1] - other[1]),
        ];
        allEdges.push(edge);
      }
      j++;
    }
    i++;
  }
  allEdges.sort((a, b) => {
    return a[2] - b[2];
  });
  const mark = new Array(points.length).fill(0).map((_, index) => index);
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
  i = 0;
  let value = 0;
  while (i < allEdges.length) {
    const [a, b, v] = allEdges[i];
    // 判断是否成环
    const aP = getParent(a);
    const bP = getParent(b);
    if (aP !== bP) {
      setMark(aP, bP);
      value += v;
      edge++;
    }
    if (edge === points.length - 1) {
      break;
    }
    i++;
  }
  return value;
};
minCostConnectPoints([[-1000000, -1000000], [1000000, 1000000]]);
