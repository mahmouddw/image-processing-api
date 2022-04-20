import express from 'express';
import resizeImg from '../../utilities/resize';

const image = express.Router();

//get route to send the image file after resizing
image.get('/', async (req, res) => {
  try {
    //get parameters to pass into resizeImg
    const getFileName = req.query.filename;
    const fileName = String(getFileName);
    const getWidth = req.query.width;
    const width = Number(getWidth);
    const getHeight = req.query.height;
    const height = Number(getHeight);

    const results = await resizeImg(fileName, width, height);
    res.sendFile(results);
  } catch {
    //catch the error and send it to the user
    res.send('bad request');
  }
});

export default image;
