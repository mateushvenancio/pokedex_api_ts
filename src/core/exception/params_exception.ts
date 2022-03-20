export default class ParamsException {
    message: string;

    constructor(...params: any[]) {
        this.message = "Invalid parameters: " + params.join(", ");
    }
}
