import { Controller, Route, Get, Post, Body } from 'tsoa';
import UserDto from '../models/userDto';
import LoginDto from '../models/loginDto';
import ResponseDto from '../models/response';
import UserService from '../services/user.service';
import moment from 'moment';
import encryp from '../utils/encryp';

const HttpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken')  // ใช้งาน jwt module
const fs = require('fs') // ใช้งาน file system module ของ nodejs

@Route('user')
export class UserController extends Controller {

    private userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    @Post("login")
    public async login(@Body() request: UserDto): Promise<ResponseDto<LoginDto>> {
        const res: ResponseDto<LoginDto> = new ResponseDto<LoginDto>();
        try {

            if (!request.username || !request.password) {
                res.message = `username or password could not empty`;
                return res;
            }

            // get username
            let user = await this.userService.get(request.username);
            if (!user) {
                res.message = `user not found`;
                return res;
            }

            let isValid = await encryp.verify(request.password, user.password || "");
            if (!isValid) {
                res.message = `user not found`;
                return res;
            }

            const privateKey = fs.readFileSync(__dirname+'/../../private.key');

            const payload = {
                userId: user.userId,
                username: user.username,
                role: user.role,
                exp: moment().add(12, 'months').valueOf()
            }

            const token = jwt.sign(payload, privateKey);
            res.data = {
                userId: user.userId,
                username: user.username,
                jwt: token
            };

            return res;

        } catch (error) {
            console.log(error);
            this.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            res.status = HttpStatus.INTERNAL_SERVER_ERROR;
            return res;
        }
    }

}