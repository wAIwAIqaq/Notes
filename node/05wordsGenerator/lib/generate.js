import { createRandomPicker, randomInt } from "./random.js";

export function generate(title, { corpus, min = 6000, max = 10000 } = {}) {
  function sentence(pick, replacer) {
    let ret = pick();
    for (const key in replacer) {
      ret = ret.replace(
        new RegExp(`{{${key}}}`, "g"),
        typeof replacer[key] === "function" ? replacer[key]() : replacer[key]
      );
    }
    return ret;
  }
  const articleLength = randomInt(min, max);
  const { famous, bosh_before, bosh, said, conclude } = corpus;
  const [pickFamous, pickBoshBefore, pickBosh, pickSaid, pickConclude] = [
    famous,
    bosh_before,
    bosh,
    said,
    conclude,
  ].map((item) => {
    return createRandomPicker(item);
  });
  const article = [];
  let totalLength = 0;
  while (totalLength < articleLength) {
    let section = "";
    const sectionLength = Math.random(200, 500);
    while (section.length < sectionLength || !/[。?]$/.test(section)) {
      const n = randomInt(0, 100);
      if (n < 20) {
        section += sentence(pickFamous, {
          said: pickSaid,
          conclude: pickConclude,
        });
      } else if (n < 50) {
        section += sentence(pickBosh, { title });
      } else {
      }
    }
    totalLength += section.length;
    article.push(section);
  }
  return article;
}
