// const Card = require('./src/_includes/components/Card');

const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addJavaScriptFunction("select", 
        function select () {
            // let sel = document.getElementById('select');
            // sel.addEventListener('change', (event)=>{
            //     console.log('change');
            //     console.log(event.target.value);
            //     return event.target.value;
            // })
            return 'select ok';
        }
    );

    //     eleventyConfig.addLayoutAlias('base', 'layouts/base.html');

    eleventyConfig.addPassthroughCopy('admin');
    // eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/scss");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/prices");
    eleventyConfig.addPassthroughCopy("src/thumbnails");
    eleventyConfig.addPassthroughCopy("prices");
    eleventyConfig.addWatchTarget("src/assets/scss");

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
