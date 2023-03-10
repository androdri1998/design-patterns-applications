import PublisherImp from "../Publishers/Publisher";
import SubscriberImp from "./Subscriber";

class MessageSubscriber implements SubscriberImp {
    send(context: PublisherImp) {
        console.log(`Sending message to ${context.contact}.`);
    }
}

export default MessageSubscriber;