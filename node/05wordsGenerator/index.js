import { existsSync, readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import { generate } from "./lib/generate.js";
import { createRandomPicker } from "./lib/random.js";
import { mkdir } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadCorpus(src) {
  const path = resolve(__dirname, src);
  const data = readFileSync(path, { encoding: "utf-8" });
  return JSON.parse(data);
}
const corpus = loadCorpus("corpus/data.json");
const pickTitle = createRandomPicker(corpus.title);
const title = pickTitle();
const article = generate(title, { corpus });
saveCorpus(title, article);
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
