import SubscriberImp from "../Subscribers/Subscriber";
import PublisherImp from "./Publisher";

class ContactPublisher implements PublisherImp {
    subscribers: SubscriberImp[] = [];
    contact: string = '';

    sendTo(contact: string) {
        this.contact = contact;
        this.sendNotification();
    }
    add(subscriber: SubscriberImp) {
        const isRegistered = this.subscribers.includes(subscriber);
        if(isRegistered) {
            console.log('Subscribe is already registered.');
            return;
        }

        this.subscribers.push(subscriber);
        console.log('Subscribe registered.');
    }
    remove(subscriber: SubscriberImp) {
        const isRegisteredPosition = this.subscribers.indexOf(subscriber);
        if(isRegisteredPosition < 0) {
            console.log("Subscribe isn't registered.");
            return;
        }

        this.subscribers.splice(isRegisteredPosition, 1);
        console.log("Subscribe removed.");
    }
    sendNotification() {
        this.subscribers.forEach(subscriber => {
            console.log('Sending notification');
            subscriber.send(this);
        });
    }
}

export default ContactPublisher;