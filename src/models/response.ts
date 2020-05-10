export default class ResponseDto<T> {

    constructor(public status: number = 200,
        public data?: T,
        public message?: string
        ) {

        }


}