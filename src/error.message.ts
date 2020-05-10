// project+catagoty+service
// 040101
// Country --> 01
// Province --> 02
// District --> 03
// SubDistrict --> 04
// ZipCode --> 05
// Department --> 06
// Prefix --> 07

const Init = {
    success: 'success',
    error: 'error',
    errorMessage: 'internal server error',
    errorRequest: 'There was some input validation errors. Please check error messages returned.',

}


const Country = {
    addCode: '040101',
    updateCode: '040102',
    getAllCode: '040103',
    getByIdCode: '040104',
    deleteCode: '040105',

    countryValidMessage: 'Unable to country without any {0} ',

    addMessage: 'A new country has been created with ID: {0}',
    updateMessage: 'Country ID: {0}  has been updated.',
    deleteMessage: 'Country ID: {0} has been deleted.',

}

const Province = {
    addCode: '040201',
    updateCode: '040202',
    getAllCode: '040203',
    getByIdCode: '040204',
    deleteCode: '040205',

    provinceValidMessage: 'Unable to province without any {0} ',

    addMessage: 'A new province has been created.',
    updateMessage: 'Province has been updated.',
    deleteMessage: 'Province has been deleted.',

}

const District = {
    addCode: '040301',
    updateCode: '040302',
    getAllCode: '040303',
    getByIdCode: '040304',
    deleteCode: '040305',

    districtValidMessage: 'Unable to district without any {0} ',

    addMessage: 'A new district has been created.',
    updateMessage: 'district ID: {0}  has been updated.',
    deleteMessage: 'district ID: {0} has been deleted.',
}

const SubDistrict = {
    addCode: '040401',
    updateCode: '040402',
    getAllCode: '040403',
    getByIdCode: '040404',
    deleteCode: '040405',

    subdistrictValidMessage: 'Unable to subdistrict without any {0} ',

    addMessage: 'A new subdistrict has been created.',
    updateMessage: 'subdistrict ID: {0}  has been updated.',
    deleteMessage: 'subdistrict ID: {0} has been deleted.',
}

const ZipCode = {
    addCode: '040501',
    updateCode: '040502',
    getAllCode: '040503',
    getByIdCode: '040504',
    deleteCode: '040505',

    zipcodeValidMessage: 'Unable to zipcode without any {0} ',

    addMessage: 'A new zipcode has been created.',
    updateMessage: 'zipcode ID: {0}  has been updated.',
    deleteMessage: 'zipcode ID: {0} has been deleted.',
}

const Department = {
    addCode: '040601',
    updateCode: '040602',
    getAllCode: '040603',
    getByIdCode: '040604',
    deleteCode: '040605',

    departmentValidMessage: 'Unable to department without any {0} ',

    addMessage: 'A new department has been created.',
    updateMessage: 'department ID: {0}  has been updated.',
    deleteMessage: 'department ID: {0} has been deleted.',
}

const Prefix = {
    addCode: '040701',
    updateCode: '040702',
    getAllCode: '040703',
    getByIdCode: '040704',
    deleteCode: '040705',

    prefixValidMessage: 'Unable to Prefix without any {0} ',

    addMessage: 'A new Prefix has been created.',
    updateMessage: 'Prefix ID: {0}  has been updated.',
    deleteMessage: 'Prefix ID: {0} has been deleted.',
}


export default {
    Init,
    Country,
    Province,
    District,
    SubDistrict,
    ZipCode,
    Department,
    Prefix
};