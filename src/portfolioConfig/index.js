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
  const imagesPath = `${imagePath}/portfolio/${categoryName}/`;
  const photos = require(`./photos/${categoryName}.json`);
  photos.forEach(photo => {
    photo.src = process.env.PUBLIC_URL + photo.src;
    const newSrcSet = [];
    for (let i = 0; i < photo.srcSet.length; i++) {
      newSrcSet.push(process.env.PUBLIC_URL + photo.srcSet[i]);
    }
    photo.srcSet = newSrcSet;
    photo.original = process.env.PUBLIC_URL + photo.original;
  });
  categories.push({
    coverImage: {
      large: `${imagesPath}0_cover-1500.jpg`,
      medium: `${imagesPath}0_cover-1000.jpg`,
      small: `${imagesPath}0_cover-500.jpg`,
      placeholder: placeholders[categoryName]
    },
    title: categoryName.toUpperCase(),
    path: categoryName,
    imagesPath: imagesPath,
    photos
  });
});

export default categories;
