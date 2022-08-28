import { mTextTemplate } from "./02.mjs";
const argv = process.argv;
console.log(mTextTemplate(argv[2] || "默认输出"));
