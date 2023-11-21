import UsbAccessoryImp from './UsbAccessoryImp';

class UsbAccessory implements UsbAccessoryImp {
    connectToUsbPort() {
        console.log('USB LOG: connecting to usb port');
        return true;
    }
}

export default UsbAccessory;