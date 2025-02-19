module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images'); // Copie tout le dossier images
  return {
    dir: {
      input: 'src',
      includes: '_includes', // Dossier des partials
      output: '_site',
    },
  };
};
