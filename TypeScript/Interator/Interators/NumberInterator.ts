import AggregatorImp from "../Aggregators/Aggregator";
import InteratorImp from "./Interator";

class NumbersInterator implements InteratorImp {
    numbersCollection:AggregatorImp;
    position: number = 0;

    constructor(numbersCollection: AggregatorImp) {
        this.numbersCollection = numbersCollection;
    }

    currentPosition() {
        return this.position;
    }

    next () {
        const numbersCollection = this.numbersCollection.getAll();
        const nextPosition = this.position + 1;
        if(numbersCollection[this.position] !== undefined) {
            this.position = nextPosition;
        }

        return numbersCollection[this.position];
    }

    isEmpty() {
        return this.numbersCollection.getAll().length === 0;
    }

    hasEnded() {
        return this.numbersCollection.getAll()[this.position] === undefined;
    }
}

export default NumbersInterator;