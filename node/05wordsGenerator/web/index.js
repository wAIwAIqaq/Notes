import { generate } from "../lib/generate.js";
import { createRandomPicker } from "../lib/random.js";
const options = document.querySelector('.options');
const config = { min: 2000, max: 5000 };
options.addEventListener("change", ({ target }) => {
  const num = Number(target.value);
  config[target.id] = num;
  target.parentNode.querySelector("input + span").innerHTML = num;
});
const generateButton = document.getElementById("generate");
const anotherTitleButton = document.getElementById("anotherTitle");
const article = document.querySelector("article");
const titleEl = document.getElementById("title");

(async function () {
  const corpus = await (await fetch("../corpus/data.json")).json();
  const pickTitle = createRandomPicker(corpus.title);
  titleEl.value = pickTitle();
  generateButton.addEventListener("click", () => {
    const text = generate(titleEl.value, { corpus, ...config });
    article.innerHTML = `<section>${text.join(
      "</section><section>"
    )}</section>`;
  });
  anotherTitleButton.addEventListener("click", () => {
    titleEl.value = pickTitle();
    if (article.innerHTML) generateButton.click();
  });
})();
