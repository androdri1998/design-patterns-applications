import MicroSdAccessoryImp from "./MicroSdAccessoryImp";
import MicroSdPortImp from "./MicroSdPortImp";

class MicroSdPort implements MicroSdPortImp {
    _microSdAccessory: MicroSdAccessoryImp;

    constructor(microSdAccessory: MicroSdAccessoryImp) {
        this._microSdAccessory = microSdAccessory;
    }

    connectToMicroSdAccesory() {
        return this._microSdAccessory.connectToMicroSdPort();
    }
}

export default MicroSdPort;