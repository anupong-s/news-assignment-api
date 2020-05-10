// env.ts
const {
    HOST,
    PORT,
    DB_HOST,
    DB_DB,
    DB_USERNAME,
    DB_PASSWORD,
    BUILD_NUM
} = process.env;

export default {
    HOST: HOST,
    PORT: PORT,
    DB_HOST: DB_HOST,
    DB_DB: DB_DB,
    DB_USERNAME: DB_USERNAME,
    DB_PASSWORD: DB_PASSWORD,
    BUILD_NUM: BUILD_NUM
}; 
