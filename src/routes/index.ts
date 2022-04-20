//This file is the index file for all app routes
import express from 'express';
import image from './api/image';

const routes = express.Router();

routes.use('/image', image);

export default routes;
