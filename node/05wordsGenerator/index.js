import { existsSync, readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import { generate } from "./lib/generate.js";
import { createRandomPicker } from "./lib/random.js";
import { mkdir } from "fs/promises";

import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import { interact } from "./lib/interact.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

const corpus = loadCorpus("corpus/data.json");
const pickTitle = createRandomPicker(corpus.title);
const optionDefinitions = [
  { name: "help" },
  { name: "title", alias: "t", type: String },
  { name: "min", type: Number },
  { name: "max", type: Number },
];

const sections = [
  { header: "狗屁不通文章生成器", content: "生成随机的文章" },
  {
    header: "Options",
    optionList: [
      {
        name: "title",
        typeLabel: "{underline string}",
        description: "文章的主题",
      },
      {
        name: "min",
        typeLabel: "{underline number}",
        description: "文章的最小字数",
      },
      {
        name: "max",
        typeLabel: "{underline number}",
        description: "文章的最大字数",
      },
    ],
  },
];
const usage = commandLineUsage(sections); //生成帮助文档
const options = commandLineArgs(optionDefinitions);
if ("help" in options) {
  console.log(usage);
  process.exit();
} else {
  let title = options.title || pickTitle();
  (async function () {
    if (Object.keys(options).length <= 0) {
      const answers = await interact([
        { text: "请输入文章主题", value: title },
        { text: "请输入最小字数", value: 6000 },
        { text: "请输入最大字数", value: 10000 },
      ]);
      title = answers[0];
      options.min = answers[1];
      options.max = answers[2];
    }
    const article = generate(title, { corpus, ...options });
    const output = saveCorpus(title, article);
    console.log(`生成成功！文章保存于 :${output}`);
  }());
}

function saveCorpus(title, article) {
  const outputDir = resolve(__dirname, "output");
  const time = new Date().valueOf();
  const outputFile = resolve(outputDir, `${title} ${time}.txt`);

  if (!existsSync(outputDir)) {
    mkdir(outputDir);
  }
  const text = `${title}\n\n ${article.join("\n    ")}`;
  writeFileSync(outputFile, text);
  return outputFile;
}
function parseOption(options = {}) {
  const argv = process.argv;
  for (let i = 0; i < argv.length; i++) {
    const cmd = argv[i - 1];
    const val = argv[i];
    if (cmd === "--title") {
      options.title = val;
    } else if (cmd === "--min") {
      options.min = Number(val);
    } else if (cmd === "--max") {
      options.max = Number(val);
    }
  }
  return options;
}

function loadCorpus(src) {
  const path = resolve(__dirname, src);
  const data = readFileSync(path, { encoding: "utf-8" });
  return JSON.parse(data);
}
