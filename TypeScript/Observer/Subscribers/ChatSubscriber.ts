import PublisherImp from "../Publishers/Publisher";
import SubscriberImp from "./Subscriber";

class ChatSubscriber implements SubscriberImp {
    send(context: PublisherImp) {
        console.log(`Sending chat message to ${context.contact}.`);
    }
}

export default ChatSubscriber;