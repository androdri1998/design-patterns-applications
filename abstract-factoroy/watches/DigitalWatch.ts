import { Watch } from '../dto';

class DigitalWatch implements Watch {
    type: string;
    shape: string;

    constructor(shape: string) {
        this.type = 'digital';
        this.shape = shape;
    }

    getTime() {
        const date = Date.now();
        return date;
    };
}

export default DigitalWatch;