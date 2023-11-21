import { Watch } from './Watch';

class PointerWatch implements Watch {
    type: string;
    shape: string;

    constructor(shape: string) {
        this.type = 'pointer';
        this.shape = shape;
    }

    getTime() {
        const date = Date.now();
        return date;
    };
}

export default PointerWatch;