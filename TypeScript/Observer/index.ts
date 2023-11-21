import ContactPublic from './Publishers/ContactPublisher';
import ChatSubscriber from './Subscribers/ChatSubscriber';
import EmailSubscriber from './Subscribers/EmailSubscriber';
import MessageSubscriber from './Subscribers/MessageSubscriber';

const contactPublic = new ContactPublic();
const chatSubscriber = new ChatSubscriber();
const emailSubscriber = new EmailSubscriber();
const messageSubscriber = new MessageSubscriber();

contactPublic.add(chatSubscriber);
contactPublic.add(emailSubscriber);
contactPublic.add(messageSubscriber);
console.log('--------------------');

contactPublic.sendTo('Test Contact');

console.log('--------------------');
contactPublic.remove(emailSubscriber);

console.log('--------------------');
contactPublic.sendTo('Test Contact Again');
