const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  // Navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);
  
    return {
      dir: {
        input: "src",
        includes: "_includes",
        layouts: "_includes/layouts",
        data: "_data",
        output: "_site"
      }
    }
};