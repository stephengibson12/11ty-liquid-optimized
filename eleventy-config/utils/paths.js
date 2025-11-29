import path from "path";

export function getStaticPaths(type, eleventyConfig) {
  const input = eleventyConfig.dir?.input || "src";
  const output = eleventyConfig.dir?.output || "_site";

  return {
    inputDir: path.join(input, "static", type),
    outputDir: path.join(output, "static", type),
  };
}
