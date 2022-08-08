function bar() {
  if (1) {
    console.log(test);
  }
}
function foo() {
  let test = 2;
  {
    let test = 3;
    bar();
  }
}
let test = 1;
foo();
