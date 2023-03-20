import StrategyImp from "./Strategy";

class ScooterStrategy implements StrategyImp {
    ride() {
        console.log('Riding a scooter');
    }
}

export default ScooterStrategy;