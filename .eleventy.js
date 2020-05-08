module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection("places", (collection) => {
    return collection.getFilteredByTag("places")
      .map((place) => {
        return {
          name: place.data.name,
          type: place.data.type,
          location: place.data.location,
        };
      });
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
