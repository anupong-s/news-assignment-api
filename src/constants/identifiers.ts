const SERVICE_IDENTIFIER = {
    ICountryRepository: Symbol("CountryRepository"),
    IProvinceRepository: Symbol("ProvinceRepository"),
    IDistrictRepository: Symbol("DistrictRepository"),
    ISubDistrictRepository: Symbol("SubDistrictRepository"),
    IDepartmentRepository: Symbol("DepartmentRepository"),
    IPrefixRepository: Symbol("PrefixRepository"),
    IZipCodeRepository: Symbol("ZipCodeRepository"),
};

export default SERVICE_IDENTIFIER;