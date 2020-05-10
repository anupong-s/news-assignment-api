import logger from '../logger';
// import { ICountryRepository } from '../repositories/country.repository';
// import { CountryRequest } from '../domain/request/country.request';
import { Country } from '../models/country.model';
// import { CountryModel } from '../domain/response/country.response';
// import { IProvinceRepository } from '../repositories/province.repository';

export class CountryService {

    // private countryRepository: ICountryRepository;
    // private provinceRepository: IProvinceRepository;

    constructor(countryRepository: any,provinceRepository: any) {
        // this.countryRepository = countryRepository;
        // this.provinceRepository = provinceRepository;
    }

    public async add(request: any): Promise<Country> {

        let result;

        try {

            //set data
            const country = new Country(
                0,
                request.CountryName,
                request.RegionName,
                request.SubregionName,
                request.PhoneCode
            );

            // result = await this.countryRepository.add(country);

            result = null;

        }
        catch (e) {
            logger.error(e);
            throw e;
        }
        return result;
    }

    public async update(id: number,request: any): Promise<Country> {

        let result;

        try {

            //set data
            const country = new Country(
                0,
                request.CountryName,
                request.RegionName,
                request.SubregionName,
                request.PhoneCode
            );

            // result = await this.countryRepository.update(id ,country);
            result = null;

        }
        catch (e) {
            logger.error(e);
            throw e;
        }
        return result;
    }
}