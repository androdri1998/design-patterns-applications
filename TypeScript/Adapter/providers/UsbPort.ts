import UsbAccesoryImp from "./UsbAccessoryImp";
import UsbPortImp from "./UsbPortImp";

class UsbPort implements UsbPortImp {
    _usbAccessory: UsbAccesoryImp;

    constructor(usbAccessory: UsbAccesoryImp) {
        this._usbAccessory = usbAccessory;
    }

    connectToUsbAccesory() {
        return this._usbAccessory.connectToUsbPort();
    }
}

export default UsbPort;