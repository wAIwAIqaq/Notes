var bar = {
  myName: "11111",
  printName: function () {
    console.log(this.myName);
  },
};
function foo() {
  let myName = "2222";
  return bar.printName;
}
let myName = '33333'
let _printName = foo();
_printName.apply(bar);
bar.printName()
