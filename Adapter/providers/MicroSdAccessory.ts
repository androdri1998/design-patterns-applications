import MicroSdAccessoryImp from "./MicroSdAccessoryImp";

class MicroSdAccessory implements MicroSdAccessoryImp {
    connectToMicroSdPort() {
        console.log('MicroSd LOG: connectig to MicroSd port');
        return true;
    }
}

export default MicroSdAccessory;