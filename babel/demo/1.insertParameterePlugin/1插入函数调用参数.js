const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const types = require("@babel/types");
const template = require("@babel/template").default;
const sourceCode = `
   console.log(1)
   
   function func () {
        console.info(2);
   }

   export default class Clazz {
        say() {
            console.debug(3)
        }
        render(){
            return <div>{console.error(4)}</div>
        }
   }
`;

const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous",
  plugins: ["jsx"],
});

const targetCalleeNames = ["log", "info", "error", "debug"].map(
  (item) => `console.${item}`
);

traverse(ast, {
  CallExpression(path, state) {
    //     if (
    //       types.isMemberExpression(path.node.callee) &&
    //       path.node.callee.object.name === "console" &&
    //       ["log", "info", "debug", "error"].includes(path.node.callee.property.name)
    //     ) {
    //       const { line, column } = path.node.loc.start;
    //       path.node.arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`))
    //     }
    /* 使用generator简化 */
    //     const calleeName = generate(path.node.callee).code;
    if(path.node.isNew){
        return;
    }
    const calleeName = path.get("callee").toString();
    if (targetCalleeNames.includes(calleeName)) {
      const { line, column } = path.node.loc.start;
      const newNode = template.expression(
        `console.log("filename:(${line},${column})")`
      )();
      newNode.isNew = true;
      if (path.findParent((path) => path.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]));
        path.skip();
      } else {
        path.insertBefore(newNode);
      }
    }
  },
});

const { code, map } = generate(ast);
console.log(code);
