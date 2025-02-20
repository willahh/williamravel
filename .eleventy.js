export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./dist");

  return {
    dir: {
      input: "src",
      output: "_site", // Sortie dans _site au lieu de dist
      includes: "_includes",
    },
    templateFormats: ["njk", "html"],
  };
}
