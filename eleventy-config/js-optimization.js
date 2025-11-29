import esbuild from "esbuild";
import path from "path";
import { getStaticPaths } from "./utils/paths.js";

export default async function JSOptimization(eleventyConfig, isProduction) {
  if (!isProduction) {
    eleventyConfig.addPassthroughCopy("src/static/js");
    return;
  }

  eleventyConfig.on("eleventy.after", async () => {
    const { inputDir, outputDir } = getStaticPaths("js", eleventyConfig);
    const entryFile = path.join(inputDir, "main.module.js");
    const outputFile = path.join(outputDir, "main.module.js");

    await esbuild.build({
      entryPoints: [entryFile],
      outfile: outputFile,
      bundle: true,
      minify: true,
      format: "esm",
      target: "es2017",
      sourcemap: false,
      write: true,
    });
  });
}
