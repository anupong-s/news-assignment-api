import logger from '../logger';
import LoginDto from '../models/loginDto';

const db = require('../db');

export default class UserService {

    constructor() { }

    public async get(username: string): Promise<LoginDto | null> {
        try {

            return new Promise((resolve, reject) => {

                let query = `SELECT user_id, username, password, role FROM users WHERE username = ?`;
                let values = [username];

                db.pool.query(query, values, function (error: any, results: any) {
                    if (error) return reject(error);

                    if (results.length === 0) {
                        return resolve(null);
                    }

                    let row = results[0];

                    let data = new LoginDto();
                    data.userId = row.user_id;
                    data.username = row.username;
                    data.password = row.password;
                    data.role = row.role;
        
                    return resolve(data);

                });

            });

        } catch (ex) {
            logger.error(ex);
            throw ex;

        }
    }

}