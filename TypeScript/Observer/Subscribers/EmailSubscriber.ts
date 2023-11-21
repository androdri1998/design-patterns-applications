import PublisherImp from "../Publishers/Publisher";
import SubscriberImp from "./Subscriber";

class EmailSubscriber implements SubscriberImp {
    send(context: PublisherImp) {
        console.log(`Sending email to ${context.contact}.`);
    }
}

export default EmailSubscriber;