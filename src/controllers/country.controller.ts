import { Controller, Route, Get, Post, Body, Query, Delete, Patch } from 'tsoa';
import logger from '../logger';
import { String } from 'typescript-string-operations';
import { Country } from '../models/country.model';
import SERVICE_IDENTIFIER from '../constants/identifiers';
// import Container from '../config/inversify.config';
import { CountryService } from '../services/country.service';
// import { ICountryRepository } from '../repositories/country.repository';
// import { CountryRequest } from '../domain/request/country.request';
// import { CreateCountryResponse, UpdateCountryResponse, CountryArrResponse, CountryObjResponse, DeleteCountryResponse } from '../domain/response/country.response';
// import { IProvinceRepository } from '../repositories/province.repository';
// import { ProvinceArrResponse } from '../domain/response/province.response';
var HttpStatus = require('http-status-codes');


@Route('country')
export class CountryController extends Controller {

    private countryRepo: any;
    private provinceRepo: any;
    private countryService: CountryService;


    constructor() {
        super()

        // this.countryRepo = Container.get<any>(SERVICE_IDENTIFIER.ICountryRepository);
        // this.provinceRepo = Container.get<any>(SERVICE_IDENTIFIER.IProvinceRepository);
        this.countryService = new CountryService(this.countryRepo, this.provinceRepo);
    }

    /**
     * @summary Add new country from given data, returns id ID if successfull or
     * undefined if there is an error. Transaction controlled.
     * USAGE: POST /country
     * @param {CountryRequest} request - as body property
     * @returns {Promise<CreateCountryResponse>} - Promise of a CreateCountryResponse whose data is
     */
    @Post()
    public async add(@Body() request: Country): Promise<Country> {
        const res: any = { errors: [] };

        logger.info("================= start  add country ======================= ");
        let logReq = String.Format("[Request] country : {0}", JSON.stringify(request))
        logger.info(logReq);

        try {

            if (!request.CountryName) {
                res.errors.push({
                    // details: String.Format(Message.Country.countryValidMessage, "country name")
                });
            }

            if (!request.RegionName) {
                res.errors.push({
                    // details: String.Format(Message.Country.countryValidMessage, "region name")
                });
            }

            if (!request.SubregionName) {
                res.errors.push({
                    // details: String.Format(Message.Country.countryValidMessage, "subregion name")
                });
            }

            if (!request.PhoneCode) {
                res.errors.push({
                    // details: String.Format(Message.Country.countryValidMessage, "phone code")
                });
            }



            if (res.errors.length > 0) {
                this.setStatus(HttpStatus.BAD_REQUEST);
                // res.message = Message.Init.errorRequest
                return res;
            }

            let country = await this.countryService.add(request);

            // res.message = Message.Country.addMessage;
            res.data = country;
            //res.message = Message.Init.success;
            this.setStatus(HttpStatus.CREATED);
            return res;

        } catch (error) {
            this.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            // res.message = Message.Init.error
            res.errors.push({
                // code: Message.Country.addCode,
                // details: Message.Init.errorMessage
            });
            return res;
        }
    }

}