import postcss from "postcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";
import postcssCustomProperties from "postcss-custom-properties";
import postcssCustomMedia from "postcss-custom-media";

export default function setupCSSOptimization(eleventyConfig, isProduction) {
  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      if (!inputPath.endsWith("/main.css")) {
        return;
      }

      return async () => {
        const plugins = [
          postcssImport(),
          postcssNested(),
          postcssCustomProperties(),
          postcssCustomMedia(),
          autoprefixer(),
          ...(isProduction ? [cssnano()] : []),
        ];

        const result = await postcss(plugins).process(inputContent, {
          from: inputPath,
        });

        return result.css;
      };
    },
  });
}
