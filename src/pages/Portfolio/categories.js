const imagePath = process.env.PUBLIC_URL + "/assets/images";

let categories = [];
const categoryNames = ["living", "bedroom", "kitchen", "bath"];

categoryNames.forEach(categoryName => {
  const categoryPath = `${imagePath}/portfolio/${categoryName}/`;
  categories.push({
    image: {
      src: `${categoryPath}/0_cover.jpg`,
      placeholder: `${categoryPath}/0_cover_placeholder.jpg`
    },
    title: categoryName.toUpperCase(),
    path: categoryName
  });
});

export default categories;
