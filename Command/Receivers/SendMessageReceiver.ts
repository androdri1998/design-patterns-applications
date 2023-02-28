import ReceiverImp from "./ReceiverImp";

class SendMessageReceiver implements ReceiverImp {
    execute(contactName: String, message: String): void {
        console.log(`Sending Message '${message}' to '${contactName}'`)
    }
}

export default SendMessageReceiver;