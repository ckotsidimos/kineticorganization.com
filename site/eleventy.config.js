import fs from "node:fs";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/files": "files" });
  eleventyConfig.addWatchTarget("./src/styles/");

  // Make VERSION available in templates
  eleventyConfig.addGlobalData("doctrineVersion", () => {
    try {
      return fs.readFileSync(new URL("../../VERSION", import.meta.url), "utf-8").trim();
    } catch {
      return "v0.0";
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "layouts",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
