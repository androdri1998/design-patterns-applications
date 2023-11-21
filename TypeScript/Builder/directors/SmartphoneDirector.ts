import SmartphoneBuilderImp from "../builders/SmartphoneBuilderImp";
import SmartphoneDirectorImp from "./SmartphoneDirectorImp";

class SmartphoneDirector implements SmartphoneDirectorImp {
    _smartphoneBuilder: SmartphoneBuilderImp;

    constructor(builder: SmartphoneBuilderImp) {
        this._smartphoneBuilder = builder;
    }

    setSmartphoneBuilder(builder: SmartphoneBuilderImp) {
        this._smartphoneBuilder = builder;
    }

    makeLowEndSmartphone() {
        this._smartphoneBuilder.setCameras(1);
        this._smartphoneBuilder.setOS('System version 1');
        const RESOLUTION_HD_IN_PIXELS = 720;
        this._smartphoneBuilder.setScreen(RESOLUTION_HD_IN_PIXELS);
        this._smartphoneBuilder.setProcessor('Processor version 1');
    }

    makeMidEndSmartphone() {
        this._smartphoneBuilder.setCameras(2);
        this._smartphoneBuilder.setOS('System version 2');
        const RESOLUTION_FULL_HD_IN_PIXELS = 1080;
        this._smartphoneBuilder.setScreen(RESOLUTION_FULL_HD_IN_PIXELS);
        this._smartphoneBuilder.setProcessor('Processor version 2');
        this._smartphoneBuilder.setAudio(true);
    }

    makeHighEndSmartphone() {
        this._smartphoneBuilder.setCameras(4);
        this._smartphoneBuilder.setOS('System version 3');
        const RESOLUTION_2K_IN_PIXELS = 1440;
        this._smartphoneBuilder.setScreen(RESOLUTION_2K_IN_PIXELS);
        this._smartphoneBuilder.setProcessor('Processor version 3');
        this._smartphoneBuilder.setAudio(true);
    }
}

export default SmartphoneDirector;