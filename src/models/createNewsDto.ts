
export default class CreateNewsDto{

    constructor(public title : string = "",
        public shortDescription: string = "", 
        public publishDate: Date = new Date(), 
        public image: string = "") {

    }
    
}
