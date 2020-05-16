// app.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import { RegisterRoutes } from './routes/routes'
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from './swagger/swagger.json';

import './controllers/news.controller';
import './controllers/user.controller';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(compression());
RegisterRoutes(app);
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDoc)); // Swagger UI route /


app.get('/', (req, res) => {
    res.send({ now: Date.now() })
});
  
export default app;