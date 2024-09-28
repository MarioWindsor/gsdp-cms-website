module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("admin"); // Copy `admin/` to `_site/admin`
	eleventyConfig.addPassthroughCopy("posts"); // Copy `posts/` to `_site/posts`
	eleventyConfig.addPassthroughCopy("css"); // Copy `css/` to `_site/css`
	eleventyConfig.addPassthroughCopy("media"); // Copy `media/` to `_site/media`
	eleventyConfig.addPassthroughCopy("js"); // Copy `JS/` to `_site/JS`
	eleventyConfig.addPassthroughCopy("sitemap.xml");
	eleventyConfig.addPassthroughCopy("robots.txt");
};
