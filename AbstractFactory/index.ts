import { WatchFactory } from "./factories/WatchFactory";
import RoundWatchFactory from "./factories/RoundWatchFactory";
import SquareWatchFactory from "./factories/SquareWatchFactory";

const main = (watchFactory: WatchFactory) => {
    const pointerWatch = watchFactory.createPointerWatch();
    const digitalWatch = watchFactory.createDigitalWatch();
    const smartWatch = watchFactory.createSmartWatch();

    return {
        pointerWatch,
        digitalWatch,
        smartWatch,
    }
}

const roundWatchFactory = new RoundWatchFactory();
const squareWatchFactory = new SquareWatchFactory();

console.log('Output round watches: ', main(roundWatchFactory));
console.log('Output square watches: ', main(squareWatchFactory));

