// constructor()
const a = {
  name: {
    firstName: "cindy",
    secondName: "jude",
  },
};
const b = a.constructor();
console.log(b);
function func(name) {
  this.name = name;
}
const c = new func('tom');
console.log(c.constructor);
