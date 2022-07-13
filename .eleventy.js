// const Card = require('./src/_includes/components/Card');


module.exports = function (eleventyConfig) {

    // eleventyConfig.addPlugin(babel, {
    //     watch: 'src/js/script.js',
    //     outputDir: '_site/js',
    //     uglify: prod,
    //   });
    
    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addWatchTarget("src/css");

    // const prod = process.env.ELEVENTY_ENV === 'prod';

    // eleventyConfig.addPlugin(sass, {
    //   watch: 'src/styles/**/*.scss',
    //   outputDir: '_site/css',
    //   cleanCSS: prod,
    //   sourcemaps: !prod,
    // });

    // eleventyConfig.addShortcode("Card", Card);

    // eleventyConfig.addCollection('posts', function(collectionApi){
    //     return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
    // })

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

