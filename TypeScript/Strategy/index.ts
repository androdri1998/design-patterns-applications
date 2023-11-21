import RideContext from "./contexts/RideContext";
import CarStrategy from "./strategies/CarStrategy";
import BikeStrategy from "./strategies/BikeStrategy";
import ScooterStrategy from "./strategies/ScooterStrategy";

const carStrategy = new CarStrategy()
const bikeStrategy = new BikeStrategy()
const scooterStrategy = new ScooterStrategy()

const rideContext = new RideContext(carStrategy);
rideContext.execute();

rideContext.setStrategy(bikeStrategy);
rideContext.execute();

rideContext.setStrategy(scooterStrategy);
rideContext.execute();