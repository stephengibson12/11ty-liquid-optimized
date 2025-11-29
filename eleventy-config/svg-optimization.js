import { optimize, loadConfig } from "svgo";
import fs from "fs/promises";
import path from "path";
import { getStaticPaths } from "./utils/paths.js";
import { getFiles } from "./utils/getFiles.js";

export default function setupSVGOptimization(eleventyConfig, isProduction) {
  if (!isProduction) {
    eleventyConfig.addPassthroughCopy("src/static/svg");
    return;
  }

  eleventyConfig.on("eleventy.before", async () => {
    const svgoConfig = await loadConfig();
    const { inputDir, outputDir } = getStaticPaths("svg", eleventyConfig);
    const svgPaths = await getFiles("**/*.svg", "src/static/svg");

    await Promise.all(
      svgPaths.map(async (file) => {
        const input = await fs.readFile(file, "utf-8");
        const { data: optimized } = optimize(input, {
          path: file,
          ...svgoConfig,
        });

        const relativePath = path.relative(inputDir, file);
        const outputPath = path.join(outputDir, relativePath);

        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, optimized, "utf-8");
      })
    );
  });
}
