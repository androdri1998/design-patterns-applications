import TextingCommand from "./Commands/TextingCommand";
import TextingInvoker from "./Invokers/TextingInvoker";
import SendSmsReceiver from "./Receivers/SendSmsReceiver";
import SendMessageReceiver from "./Receivers/SendMessageReceiver";

const contactName = "Sample Name";
const message = "Sample Message";
const sendSmsReceiver = new SendSmsReceiver();
const sendMessageReceiver = new SendMessageReceiver();
const textingCommandBySMS = new TextingCommand(sendSmsReceiver, message, contactName);
const textingCommandByMessage = new TextingCommand(sendMessageReceiver, message, contactName);
const textingInvoker = new TextingInvoker();

textingInvoker.setCommand(textingCommandBySMS);
textingInvoker.text();
textingInvoker.setCommand(textingCommandByMessage);
textingInvoker.text();
