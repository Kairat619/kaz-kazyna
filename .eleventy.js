const moment = require("moment");



module.exports = function(eleventyConfig) {

   

    eleventyConfig.addPassthroughCopy("./src/assets");
   // eleventyConfig.addPassthroughCopy("./src/admin");
    // eleventyConfig.addPassthroughCopy("./src/blog");
    eleventyConfig.addPassthroughCopy("./src/en");
    eleventyConfig.addPassthroughCopy("./src/ru");
    eleventyConfig.addPassthroughCopy("./src/cn");
  //  eleventyConfig.addPassthroughCopy("./src/_redirects");
   // eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "/robots.txt" });

// date filter (localized)
eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "kk";
    moment.locale(locale);
    return moment(date).format(format);
  });


   eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "en-us") {
    var theDate = new Date(dateVal);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return theDate.toLocaleDateString(locale, options);
  });


 

// Return your Object options:
    return {

        // allows .html files to contain nunjucks templating language
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            data: "_data"
        }
    };
}