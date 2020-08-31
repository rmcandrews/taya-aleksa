import bathPlaceholder from "./placeholders/bath.jpg";
import bedroomPlaceholder from "./placeholders/bedroom.jpg";
import kitchenPlaceholder from "./placeholders/kitchen.jpg";
import livingPlaceholder from "./placeholders/living.jpg";

const placeholders = {
  bath: bathPlaceholder,
  bedroom: bedroomPlaceholder,
  kitchen: kitchenPlaceholder,
  living: livingPlaceholder
};

const imagePath = process.env.PUBLIC_URL + "/assets/images";

let categories = [];
const categoryNames = ["living", "bedroom", "kitchen", "bath"];

categoryNames.forEach(categoryName => {
  const categoryPath = `${imagePath}/portfolio/${categoryName}/`;
  categories.push({
    image: {
      medium: `${categoryPath}0_cover-1000.jpg`,
      large: `${categoryPath}0_cover-1500.jpg`,
      small: `${categoryPath}0_cover-500.jpg`,
      placeholder: placeholders[categoryName]
    },
    title: categoryName.toUpperCase(),
    path: categoryName
  });
});

export default categories;
