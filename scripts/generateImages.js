const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const imagePath = "public/assets/images";

fs.readdir(imagePath, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(file => {
    if (file.includes(".jpg")) {
      let newImagePath = path.join(
        __dirname,
        "..",
        imagePath,
        "placeholders",
        file
      );
      sharp(path.join(imagePath, file))
        .toBuffer()
        .then(async buffer => {
          let metadata = await sharp(buffer).metadata();
          let newWidth = Math.round(metadata.width / 10);
          let newFileBuffer = await sharp(buffer)
            .resize(newWidth)
            .toBuffer();
          fs.writeFileSync(newImagePath, newFileBuffer);
        })
        .catch(err => {
          console.error(err);
        });
    }
  });
});
