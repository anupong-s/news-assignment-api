export default class NewsDto {

    constructor(public id = 0,
        public title = "",
        public shortDescription: string = "", 
        public publicDate: number = Date.now(), 
        public image: string = "") {
        
    }

}