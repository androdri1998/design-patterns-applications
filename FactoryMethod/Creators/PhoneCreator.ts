import Comunicator from "../Comunicators/Comunicator";
import PhoneComunicator from "../Comunicators/PhoneComunicator";
import ComunicatorCreator from "./ComunicatorCreator";

class PhoneCreator extends ComunicatorCreator {
    public factory(): Comunicator {
        return new PhoneComunicator();
    }
}

export default PhoneCreator;