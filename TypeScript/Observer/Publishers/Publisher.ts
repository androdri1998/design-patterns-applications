import SubscriberImp from "../Subscribers/Subscriber";

interface PublisherImp {
    subscribers: SubscriberImp[];
    contact: string;

    add: (subscriber: SubscriberImp) => void;
    remove: (subscriber: SubscriberImp) => void;
    sendNotification: () => void;
    sendTo: (contact: string) => void;
}

export default PublisherImp;