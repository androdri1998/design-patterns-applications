import MicroSdAccessoryImp from '../providers/MicroSdAccessoryImp';
import UsbAccessory from '../providers/UsbAccessory';

class MicroSdAdapter extends UsbAccessory {
    _microSdAccessory: MicroSdAccessoryImp;

    constructor(microSdAccessory: MicroSdAccessoryImp) {
        super();
        this._microSdAccessory = microSdAccessory;
    }

    connectToUsbPort() {
        console.log('MicroSd Adapter LOG: connecting MicroSd to usb port via MicroSd adapter.');
        return this._microSdAccessory.connectToMicroSdPort();
    }
}

export default MicroSdAdapter;