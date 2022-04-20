import sharp from 'sharp';
import fs from 'fs';

//function to resize the Image
const resizeImg = async (fileName: string, width: number, height: number) => {
  //rename the image like its dimensions
  const newName = '' + fileName + width + height;
  const imagePath = __dirname + '/thumb/' + newName + '.jpg';

  //check if the file exist, do NOT generate it again
  if (fs.existsSync(imagePath)) {
    return imagePath;
  } else {
    //file not exist, Generate it
    await sharp(__dirname + '/images/' + fileName + '.jpg')
      .resize(width, height)
      .toFile(__dirname + '/thumb/' + newName + '.jpg');
    return imagePath;
  }
};

export default resizeImg;
