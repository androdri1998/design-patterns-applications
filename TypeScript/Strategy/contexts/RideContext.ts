import StrategyImp from "../strategies/Strategy";
import ContextImp from "./Context";

class RideContext implements ContextImp {
    strategy: StrategyImp;

    constructor(strategy: StrategyImp) {
        this.strategy = strategy;
    }

    setStrategy(strategy: StrategyImp) {
        this.strategy = strategy;
    }

    execute() {
        this.strategy.ride();
    }
}

export default RideContext;