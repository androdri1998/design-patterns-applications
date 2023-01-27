import Comunicator from "./Comunicator";

class MessageComunicator implements Comunicator {
    doContact() {
        console.log('LOG: sending message');
    }
}

export default MessageComunicator;