import { minify } from "html-minifier-terser";

/**
 * Registers HTML minification as an Eleventy transform.
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
 * @param {boolean} isProduction
 */
export default function setupHTMLOptimization(eleventyConfig, isProduction) {
  if (!isProduction) return;

  eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return await minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      });
    }

    return content;
  });
}
