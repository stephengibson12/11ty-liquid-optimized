import setupHTMLOptimization from "./eleventy-config/html-optimization.js";
import setupCSSOptimization from "./eleventy-config/css-optimization.js";
import setupSVGOptimization from "./eleventy-config/svg-optimization.js";
import setupJSOptimization from "./eleventy-config/js-optimization.js";

export default function (eleventyConfig) {
  const isProduction = process.env.NODE_ENV === "production";

  // Static passthroughs
  eleventyConfig.addPassthroughCopy("src/static/media");

  // HTML, CSS, SVG, JS Optimizations
  setupHTMLOptimization(eleventyConfig, isProduction);
  setupCSSOptimization(eleventyConfig, isProduction);
  setupSVGOptimization(eleventyConfig, isProduction);
  setupJSOptimization(eleventyConfig, isProduction);
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
    layouts: "_layouts",
  },
};
