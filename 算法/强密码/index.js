/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  let i = 0;
  let pre = null;
  if(password.length < 8){
        return false
  }
  let lowercaseRegexp = /^[a-z]/;
  let uppercaseRegexp = /^[A-Z]/;
  let numberRegexp = /^[0-9]/;
  let symbolGroup = "!@#$%^&*()-+";
  let lowercaseFlag = false;
  let uppercaseFlag = false;
  let numberFlag = false;
  let symbolFlag = false;
  let repeatFlag = false;
  while (i < password.length) {
    const cur = password[i];
    if (lowercaseRegexp.test(cur)) {
      lowercaseFlag = true;
    }
    if (uppercaseRegexp.test(cur)) {
      uppercaseFlag = true;
    }
    if (numberRegexp.test(cur)) {
      numberFlag = true;
    }
    if (symbolGroup.includes(cur)) {
      symbolFlag = true;
    }
    if (cur === pre) {
      repeatFlag = true;
    }
    pre = cur;
    i++;
  }
  if (
    lowercaseFlag &&
    uppercaseFlag &&
    numberFlag &&
    symbolFlag &&
    !repeatFlag
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(strongPasswordCheckerII("11A!A!Aa"));
