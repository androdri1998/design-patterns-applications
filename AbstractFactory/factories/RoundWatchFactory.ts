import { WatchFactory } from './WatchFactory';
import PointerWatch from '../watches/PointerWatch';
import DigitalWatch from '../watches/DigitalWatch';
import SmartWatch from '../watches/SmartWatch';

class RoundWatchFactory implements WatchFactory {
    createPointerWatch() {
        const pointerWatch = new PointerWatch('round');
        return pointerWatch;
    };
    createDigitalWatch() {
        const digitalWatch = new DigitalWatch('round');
        return digitalWatch;
    };
    createSmartWatch() {
        const smartWatch = new SmartWatch('round');
        return smartWatch;
    };
}

export default RoundWatchFactory;