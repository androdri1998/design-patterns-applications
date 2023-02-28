import ReceiverImp from "./ReceiverImp";

class SendSmsReceiver implements ReceiverImp {
    execute(contactName: String, message: String): void {
        console.log(`Sending SMS '${message}' to '${contactName}'`)
    }
}

export default SendSmsReceiver;