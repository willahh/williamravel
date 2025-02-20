import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';

export default function (eleventyConfig) {
  console.log('Eleventy config chargé !');
  
  // Copie les images
  eleventyConfig.addPassthroughCopy("./src/images");
  
  // Copie dist au démarrage
  eleventyConfig.addPassthroughCopy({ "./dist": "dist" }, { debug: true });
  
  // Surveille les changements dans ./dist avec chokidar
  const watcher = chokidar.watch("./dist/**/*", { persistent: true });
  watcher.on("change", (filePath) => {
    console.log(`Changement détecté dans ${filePath}`);
    const distSource = path.resolve("./dist");
    const distDest = path.resolve("./_site/dist");
    if (fs.existsSync(distSource)) {
      fs.cpSync(distSource, distDest, { recursive: true, force: true });
      console.log("Copie de ./dist vers _site/dist terminée.");
    }
  });

  eleventyConfig.on("afterBuild", () => {
    console.log("Eleventy build terminé !");
    const distSource = path.resolve("./dist");
    const distDest = path.resolve("./_site/dist");
    if (fs.existsSync(distSource)) {
      console.log("Copie initiale de ./dist vers _site/dist...");
      fs.cpSync(distSource, distDest, { recursive: true, force: true });
    } else {
      console.log("Le dossier ./dist n'existe pas encore.");
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "html"],
  };
}