import { WatchFactory } from './WatchFactory';
import PointerWatch from '../watches/PointerWatch';
import DigitalWatch from '../watches/DigitalWatch';
import SmartWatch from '../watches/SmartWatch';

class SquareWatchFactory implements WatchFactory {
    createPointerWatch() {
        const pointerWatch = new PointerWatch('square');
        return pointerWatch;
    };
    createDigitalWatch() {
        const digitalWatch = new DigitalWatch('square');
        return digitalWatch;
    };
    createSmartWatch() {
        const smartWatch = new SmartWatch('square');
        return smartWatch;
    };
}

export default SquareWatchFactory;