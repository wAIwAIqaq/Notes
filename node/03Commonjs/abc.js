const a = 1;
const b = 2;
const c = () => a + b;
// exports 与 module.exports不能混用
// exports.g = () => a * b;
module.exports = {
  d: a,
  e: b,
  f: c
};
