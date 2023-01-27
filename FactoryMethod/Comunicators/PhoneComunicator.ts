import Comunicator from "./Comunicator";

class PhoneComunicator implements Comunicator {
    doContact() {
        console.log('LOG: making call');
    }
}

export default PhoneComunicator;