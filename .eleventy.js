// const Card = require('./src/_includes/components/Card');

const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(eleventySass);

    //     eleventyConfig.addLayoutAlias('base', 'layouts/base.html');

    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/prices");
    eleventyConfig.addPassthroughCopy("src/thumbnails");
    eleventyConfig.addPassthroughCopy("prices");
    eleventyConfig.addPassthroughCopy("src/assets/scss");
    eleventyConfig.addWatchTarget("src/assets/scss");

    return {
        dir: {
        input: "src",
        includes: "_includes",
        output: "_site",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
