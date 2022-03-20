export default class NotFoundException {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    toString() {
        return this.message || "Not found";
    }
}
