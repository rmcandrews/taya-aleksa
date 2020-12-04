const fs = require("fs");
const path = require("path");
const fsPromises = fs.promises;
const sharp = require("sharp");

const portfolioCategoriesPath = "public/assets/images/portfolio/";
const appPortfolioCategoriesPath = "/assets/images/portfolio/";
const galleryConfigPath = "src/portfolioConfig/photos/";

const creatResizedImage = async (
  buffer,
  categoryPath,
  fileName,
  originalWidth,
  targetResizeWidth
) => {
  let resizedImagePath = path.join(
    categoryPath,
    fileName.slice(0, -4) +
      `-${targetResizeWidth <= 100 ? "placeholder" : targetResizeWidth}.jpg`
  );
  let resizedWidth =
    originalWidth > targetResizeWidth ? targetResizeWidth : originalWidth;
  let resizedBuffer = await sharp(buffer)
    .resize(resizedWidth)
    .toBuffer();
  fs.writeFileSync(resizedImagePath, resizedBuffer);
};

const main = async () => {
  const categories = await fsPromises.readdir(portfolioCategoriesPath);
  for (const category of categories) {
    const categoryPath = portfolioCategoriesPath + category;
    const categoryGalleryConfig = [];
    const fileNames = await fsPromises.readdir(categoryPath);
    for (const fileName of fileNames) {
      if (
        fileName.includes(".jpg") &
        !fileName.includes("-500.jpg") &
        !fileName.includes("-1000.jpg") &
        !fileName.includes("-1500.jpg") &
        !fileName.includes("-placeholder.jpg")
      ) {
        // get image metadata
        const fileBuffer = await sharp(
          path.join(categoryPath, fileName)
        ).toBuffer();
        let metadata = await sharp(fileBuffer).metadata();
        const { width, height } = metadata;

        for (const resizeWidth of [500, 1000, 1500, 100]) {
          await creatResizedImage(
            fileBuffer,
            categoryPath,
            fileName,
            width,
            resizeWidth
          );
        }

        const baseFileName = fileName.slice(0, -4);
        const baseFilePath =
          appPortfolioCategoriesPath + category + "/" + baseFileName;

        const photoConfig = {
          src: baseFilePath + `-1000.jpg`,
          srcSet: [
            `${baseFilePath}-500.jpg 500w`,
            `${baseFilePath}-1000.jpg 1000w`,
            `${baseFilePath}-1500.jpg 1500w`,
          ],
          sizes: ["(max-width: 571px) 75vw, (max-width: 971px) 45vw, 30vw"],
          width,
          height,
          original: `${baseFilePath}.jpg`,
        };

        categoryGalleryConfig.push(photoConfig);
      }
    }
    // Create gallery photo config
    fs.writeFileSync(
      galleryConfigPath + category + ".json",
      JSON.stringify(categoryGalleryConfig)
    );
  }
};

main();
