import NumbersInterator from "../Interators/NumberInterator";
import AggregatorImp from "./Aggregator";

class NumbersCollection implements AggregatorImp {
    items: number[] = [];

    getAll() {
        return this.items;
    }

    add(number: number) {
        this.items.push(number);
    }

    getInterator() {
        return new NumbersInterator(this);
    }
}

export default NumbersCollection;