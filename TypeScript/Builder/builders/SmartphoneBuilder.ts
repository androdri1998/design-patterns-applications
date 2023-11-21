import Smartphone from "../models/Smartphone";
import SmartphoneImp from "../models/SmartphoneImp";
import SmartphoneBuilderImp from "./SmartphoneBuilderImp";

class SmartphoneBuilder implements SmartphoneBuilderImp {
    _smartphone: SmartphoneImp;

    constructor() {
        this._smartphone = new Smartphone();
    }

    reset() {
        this._smartphone = new Smartphone();
    }

    setScreen(resolution: number) {
        this._smartphone.setScreen(resolution);
    }

    setOS(osName: string) {
        this._smartphone.setOs(osName);
    }

    setCameras(amountCameras: number) {
        this._smartphone.setCameras(amountCameras);
    }

    setAudio(isStereoAudio: boolean) {
        this._smartphone.setAudio(isStereoAudio);
    }

    setProcessor(processorName: string) {
        this._smartphone.setProcessor(processorName);
    }

    result(): SmartphoneImp {
        const smartphoneBuilded = this._smartphone;
        this.reset();
        return smartphoneBuilded;
    }
}

export default SmartphoneBuilder;