import { build } from "esbuild";

const buildOptions = {
  entryPoints: ["./web/index.js"],
  outfilee: ["./dist/index.js"],
  bundle: true,
  minify: true,
};
build(buildOptions);
