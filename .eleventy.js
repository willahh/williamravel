export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/v1/images");
  eleventyConfig.addPassthroughCopy("./dist");


  return {
    dir: {
      input: "src/v1", // Source dans src/v1
      output: "_site", // Sortie dans _site au lieu de dist
      includes: "_includes",
    },
    templateFormats: ["njk", "html"],
  };
}
