// server.ts
import http from 'http';
import env from './env';
import app from './app';

const today = new Date();
const server = http.createServer(app);
server.listen(env.PORT, () => {
   console.log(`[${today}] Server is running on host ${env.HOST} port ${env.PORT}`);
});