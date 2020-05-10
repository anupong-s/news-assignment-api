import env from '../env';

const config = {
  connectionLimit : 10,
  host            : env.DB_HOST,
  user            : env.DB_USERNAME,
  password        : env.DB_PASSWORD,
  database        : env.DB_DB
}

export default config;
