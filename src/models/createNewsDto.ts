
export default class CreateNewsDto{

    constructor(public title : string = "",
        public shortDescription: string = "", 
        public publicDate: Date = new Date(), 
        public image: string = "") {

    }
    
}
