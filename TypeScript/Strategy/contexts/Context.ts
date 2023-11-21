import StrategyImp from "../strategies/Strategy";

interface ContextImp {
    strategy: StrategyImp;
    setStrategy: (strategy: StrategyImp) => void;
    execute: () => void;
}

export default ContextImp;