import { SmartWatch as SmartWatchImp } from './Watch';

class SmartWatch implements SmartWatchImp {
    type: string;
    shape: string;

    constructor(shape: string) {
        this.type = 'smart';
        this.shape = shape;
    }

    canOpenApps() {
        return true;
    };

    getTime() {
        const date = Date.now();
        return date;
    };
}

export default SmartWatch;