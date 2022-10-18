const { transformFileSync } = require("@babel/core");
const insertParameterPlugin = require("./demo_1_plugin");
const path = require("path");

const { code } = transformFileSync(path.join(__dirname, "./sourceCode.js"), {
  plugins: [insertParameterPlugin],
  parserOpts: {
    sourceType: "unambiguous",
    plugins: ["jsx"],
  },
});

console.log(code);
