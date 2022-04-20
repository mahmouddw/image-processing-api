import express from 'express';
import routes from './routes/index';

//create an express instance
const app = express();

const port = 3000;

//app route
app.use('/', routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
