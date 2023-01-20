import { Watch } from '../dto';

class SmartWatch implements Watch {
    type: string;
    shape: string;

    constructor(shape: string) {
        this.type = 'smart';
        this.shape = shape;
    }

    getTime() {
        const date = Date.now();
        return date;
    };
}

export default SmartWatch;