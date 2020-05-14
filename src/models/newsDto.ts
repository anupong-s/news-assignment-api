export default class NewsDto {

    constructor(public id = 0,
        public title = "",
        public shortDescription: string = "", 
        public publishDate: number = Date.now(), 
        public image: string = "") {
        
    }

}