import logger from '../logger';
import NewsDto from '../models/NewsDto';
import CreateNewsDto from '../models/createNewsDto';
import moment from 'moment';

const db = require('../db');

export default class NewsService {

    constructor() {

    }

    public async create(req: CreateNewsDto): Promise<void> {

        try {

            return new Promise((resolve, reject) => {

                let query = `INSERT INTO news(news_id, title, short_description, publish_date, image, created_by, updated_by) 
                values(uuid(), ?, ?, ?, ?, ?, ?)`;

                let values = [req.title, req.shortDescription, req.publishDate, req.image, 'ADMIN', 'ADMIN']

                db.pool.query(query, values, function (error, results) {
                    if (error) return reject(error);
                    return resolve();
                });

            });

        }
        catch (ex) {
            console.log(ex);
            throw ex;
        }

    }

    public async update(id: string, req: CreateNewsDto): Promise<void> {

        try {

            return new Promise((resolve, reject) => {

                
                let query = `UPDATE news SET 
                    title = ?, 
                    short_description = ?,
                    publish_date = ?,
                    image = ?,
                    updated_date = ?,
                    updated_by = ?
                    WHERE news_id = ?
                    `
                let values = [req.title, req.shortDescription, req.publishDate, req.image, new Date(), 'ADMIN', id];

                db.pool.query(query, values, function (error, results) {
                    if (error) return reject(error);        
                    return resolve();
                });

            });

        }
        catch (ex) {
            logger.error(ex);
            throw ex;
        }

    }

    public async get(id: string): Promise<NewsDto | null> {
        try {

            return new Promise((resolve, reject) => {

                let query = `SELECT * FROM news WHERE news_id = ?`;
                let values = [id];

                db.pool.query(query, values, function (error, results) {
                    if (error) return reject(error);

                    if (results.length === 0) {
                        return resolve(null);
                    }

                    let row = results[0];

                    let data = new NewsDto();
                    data.id = row.news_id;
                    data.title = row.title;
                    data.shortDescription = row.short_description;
                    data.publishDate = moment(row.publish_date).valueOf();
                    data.image = row.image;
        
                    return resolve(data);

                });

            });

        } catch (ex) {
            logger.error(ex);
            throw ex;

        }
    }

    public async search(publishDate: Date, direction: string = 'asc'): Promise<NewsDto[] | []> {
        try {

            return new Promise((resolve, reject) => {

                let query = `SELECT * FROM news WHERE 1=1 `;

                if (publishDate) {
                    query += `and publish_date >= ${publishDate} `;
                }

                query += `order by publish_date ${direction} `;
                
                db.pool.query('SELECT * FROM news', function (error, results) {
                    if (error) return reject(error);

                    let output : NewsDto[] = Array<NewsDto>();

                    results.forEach((row: any) => {
                        let data = new NewsDto();
                        data.id = row.news_id;
                        data.title = row.title;
                        data.shortDescription = row.short_description;
                        data.publishDate = row.publish_date;
                        data.image = row.image;

                        output.push(data);
                    });
        
                    return resolve(output);

                });

            });

        } catch (ex) {
            logger.error(ex);
            throw ex;

        }
    }

    public async delete(id: string): Promise<void> {
        try {

            return new Promise((resolve, reject) => {

                let query = `DELETE FROM news WHERE news_id = ?`;
                let values = [id];

                db.pool.query(query, values, function (error, results) {
                    if (error) return reject(error);
                    return resolve();
                });

            });

        } catch (ex) {
            logger.error(ex);
            throw ex;

        }
    }

}