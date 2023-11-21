import StrategyImp from "./Strategy";

class CarStrategy implements StrategyImp {
    ride() {
        console.log('Riding a car');
    }
}

export default CarStrategy;