import { Controller, Route, Get, Post, Body, Query, Delete, Put, Security } from 'tsoa';
import CreateNewsDto from '../models/createNewsDto';
import NewsDto from '../models/NewsDto';
import ResponseDto from '../models/response';
import NewsService from '../services/news.service';
import moment from 'moment';
var HttpStatus = require('http-status-codes');

@Route('news')
export class NewsController extends Controller {

    private newsService: NewsService;

    constructor() {
        super();
        this.newsService = new NewsService();
    }

    @Security("jwt")
    @Get()
    public async getNews(@Query() publishDate: string, @Query() direction: string): Promise<ResponseDto<NewsDto[]>> {
        let res: ResponseDto<NewsDto[]> = new ResponseDto<NewsDto[]>();
        try {

            console.log('direction: ', direction);

            let newPublishDate = moment(publishDate, 'DD/MM/YYYY').toDate();
            let newsArr = await this.newsService.search(newPublishDate, direction);
            res.data = newsArr;
            return res;

        } catch (ex) {
            this.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            res.status = HttpStatus.INTERNAL_SERVER_ERROR;
            res.message = ex.message || ex;
            return res;
        }

    }

    @Security("jwt")
    @Get("/:id")
    public async getNewsById(id: string): Promise<ResponseDto<NewsDto>> {
        let res: ResponseDto<NewsDto> = new ResponseDto<NewsDto>();

        try {

            let news_result = await this.newsService.get(id);
            res.data = news_result || undefined;
    
            return res;
        } catch (ex) {
            this.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            res.status = HttpStatus.INTERNAL_SERVER_ERROR;
            res.message = ex.message || ex;
            return res;
        }
        
    }

    @Security("jwt")
    @Post()
    public async createNews(@Body() request: CreateNewsDto): Promise<ResponseDto<void>> {
        const res: ResponseDto<void> = new ResponseDto<void>();

        try {

            await this.newsService.create(request);
            return res;

        } catch (error) {
            this.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            res.status = HttpStatus.INTERNAL_SERVER_ERROR;
            return res;
        }
    }

    @Security("jwt")
    @Put("/:id")
    public async updateNews(id: string, @Body() request: CreateNewsDto): Promise<ResponseDto<void>> {

        const res: ResponseDto<void> = new ResponseDto<void>();

        try {

            await this.newsService.update(id, request);
            return res;

        } catch (error) {
            this.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            res.status = HttpStatus.INTERNAL_SERVER_ERROR;
            return res;
        }


    }

    @Security("jwt")
    @Delete("/:id")
    public async deleteNewsById(id: string): Promise<ResponseDto<void>> {
        let res: ResponseDto<void> = new ResponseDto<void>();

        try {

            await this.newsService.delete(id);

            return res;

        } catch (ex) {
            this.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            res.status = HttpStatus.INTERNAL_SERVER_ERROR;
            res.message = ex.message || ex;
            return res;
        }
        
    }

}