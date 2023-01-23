/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  brackets.unshift([0, 0]);
  let tax = 0;
  let i = 1;
  while (i < brackets.length ) {
    const bracket = brackets[i];
    const preBracket = brackets[i-1];
    const area = (Math.min(income, bracket[0]) - preBracket[0]);
    tax += Math.max((area * bracket[1]) / 100, 0);
    if (income <= bracket) {
      break;
    }
    i++;
  }
  return tax.toFixed(5);
};
calculateTax(
  (brackets = [
    [3, 50],
    [7, 10],
    [12, 25],
  ]),
  (income = 10)
);
