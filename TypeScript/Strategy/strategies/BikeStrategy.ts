import StrategyImp from "./Strategy";

class BikeStrategy implements StrategyImp {
    ride() {
        console.log('Riding a bike');
    }
}

export default BikeStrategy;