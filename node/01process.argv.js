const template = (text) => `输出：${text}`;
const argv = process.argv;
// process.argv 为一个数组
// 前面两个item 第一个为node的绝对路径，第二个为js文件的绝对路径
// 列如 ['C:\\Program Files\\nodejs\\node.exe', 'E:\\Notes\\node\\01process.argv.js'];
console.log(argv);
console.log(template(argv[2] || "默认输出"));
