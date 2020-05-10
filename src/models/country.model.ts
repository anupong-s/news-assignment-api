
export class Country{

	constructor(CountryID : number,CountryName: string,RegionName: string,SubregionName: string,PhoneCode: string) {

        this.CountryID= CountryID;
        this.CountryName= CountryName;
        this.RegionName= RegionName;
        this.SubregionName= SubregionName;
        this.PhoneCode= PhoneCode;
	}

    public CountryID : number;
    public CountryName: string;
    public RegionName: string;
    public SubregionName: string;
    public PhoneCode: string;

}
