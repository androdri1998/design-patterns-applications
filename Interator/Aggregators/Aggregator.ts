import InteratorImp from "../Interators/Interator";

interface AggregatorImp {
    getAll: () => number[];
    add: (number: number) => void;
    getInterator: () => InteratorImp;
}

export default AggregatorImp;