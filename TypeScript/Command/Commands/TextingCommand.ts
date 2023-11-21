import ReceiverImp from "../Receivers/ReceiverImp";
import CommandImp from "./CommandImp";

class TextingCommand implements CommandImp {
    receiver: ReceiverImp;
    text: String;
    contactName: String

    constructor(receiver: ReceiverImp, text: String, contactName: string) {
        this.receiver = receiver;
        this.text = text;
        this.contactName = contactName;
    }

    execute() {
        this.receiver.execute(this.contactName, this.text);
    }
}

export default TextingCommand;