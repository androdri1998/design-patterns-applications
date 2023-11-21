import PublisherImp from "../Publishers/Publisher";

interface SubscriberImp {
    send: (context: PublisherImp) => void;
}

export default SubscriberImp;