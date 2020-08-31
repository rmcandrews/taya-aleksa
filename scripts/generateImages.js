const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const portfolioCategoriesPath = "public/assets/images/portfolio/";

fs.readdir(portfolioCategoriesPath, (err, categories) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  categories.forEach((category) => {
    const categoryPath = portfolioCategoriesPath + category;
    fs.readdir(categoryPath, (err, fileNames) => {
      fileNames.forEach((fileName) => {
        if (
          fileName.includes(".jpg") &
          !fileName.includes("-500.jpg") &
          !fileName.includes("-1000.jpg") &
          !fileName.includes("-1500.jpg") &
          !fileName.includes("-placeholder.jpg")
        ) {
          let smallImagePath = path.join(
            categoryPath,
            fileName.slice(0, -4) + "-500.jpg"
          );
          sharp(path.join(categoryPath, fileName))
            .toBuffer()
            .then(async (buffer) => {
              let metadata = await sharp(buffer).metadata();
              let newWidth;
              if (metadata.width > 500) {
                newWidth = 500;
              } else {
                newWidth = metadata.width;
              }
              let newFileBuffer = await sharp(buffer)
                .resize(newWidth)
                .toBuffer();
              fs.writeFileSync(smallImagePath, newFileBuffer);
            })
            .catch((err) => {
              console.error(err);
            });
          let mediumImagePath = path.join(
            categoryPath,
            fileName.slice(0, -4) + "-1000.jpg"
          );
          sharp(path.join(categoryPath, fileName))
            .toBuffer()
            .then(async (buffer) => {
              let metadata = await sharp(buffer).metadata();
              let newWidth;
              if (metadata.width > 1000) {
                newWidth = 1000;
              } else {
                newWidth = metadata.width;
              }
              let newFileBuffer = await sharp(buffer)
                .resize(newWidth)
                .toBuffer();
              fs.writeFileSync(mediumImagePath, newFileBuffer);
            })
            .catch((err) => {
              console.error(err);
            });
          let largeImagePath = path.join(
            categoryPath,
            fileName.slice(0, -4) + "-1500.jpg"
          );
          sharp(path.join(categoryPath, fileName))
            .toBuffer()
            .then(async (buffer) => {
              let metadata = await sharp(buffer).metadata();
              let newWidth;
              if (metadata.width > 1500) {
                newWidth = 1500;
              } else {
                newWidth = metadata.width;
              }
              let newFileBuffer = await sharp(buffer)
                .resize(newWidth)
                .toBuffer();
              fs.writeFileSync(largeImagePath, newFileBuffer);
            })
            .catch((err) => {
              console.error(err);
            });
          let placeholderImagePath = path.join(
            categoryPath,
            fileName.slice(0, -4) + "-placeholder.jpg"
          );
          sharp(path.join(categoryPath, fileName))
            .toBuffer()
            .then(async (buffer) => {
              let metadata = await sharp(buffer).metadata();
              let newWidth;
              if (metadata.width > 100) {
                newWidth = 100;
              } else {
                newWidth = metadata.width;
              }
              let newFileBuffer = await sharp(buffer)
                .resize(newWidth)
                .toBuffer();
              fs.writeFileSync(placeholderImagePath, newFileBuffer);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      });
    });
  });
});
