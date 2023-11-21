import Comunicator from "../Comunicators/Comunicator";
import MessageComunicator from "../Comunicators/MessageComunicator";
import ComunicatorCreator from "./ComunicatorCreator";

class MessageCreator extends ComunicatorCreator {
    public factory(): Comunicator {
        return new MessageComunicator();
    }
}

export default MessageCreator;