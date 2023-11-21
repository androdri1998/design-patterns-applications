import MicroSdAdapter from "./adapters/MicroSdAdapter";
import MicroSdAccessory from "./providers/MicroSdAccessory";
import MicroSdPort from "./providers/MicroSdPort";
import UsbAccessory from "./providers/UsbAccessory";
import UsbPort from "./providers/UsbPort";

// connecting an Usb accessory to a usb port
console.log('MAIN LOG: --------------------------------');
const usbAccessory = new UsbAccessory();
const usbPort = new UsbPort(usbAccessory);
console.log('MAIN LOG: Usb Accessory is connected: ', usbPort.connectToUsbAccesory());
console.log('MAIN LOG: --------------------------------');

// connecting a MicroSd accessory to a usb port
console.log('MAIN LOG: --------------------------------');
const microSdAccessory = new MicroSdAccessory();
const microSdPort = new MicroSdPort(microSdAccessory);
console.log('MAIN LOG: MicroSd Accessory is connected: ', microSdPort.connectToMicroSdAccesory());
console.log('MAIN LOG: --------------------------------');

// connecting a MicroSd accessory to a usb port usind a MicroSd adpater
console.log('MAIN LOG: --------------------------------');
const microSdAdapter = new MicroSdAdapter(microSdAccessory);
const usbPortUsingAdapter = new UsbPort(microSdAdapter);
console.log('MAIN LOG: Usb Accessory is connected: ', usbPortUsingAdapter.connectToUsbAccesory());
console.log('MAIN LOG: --------------------------------');
