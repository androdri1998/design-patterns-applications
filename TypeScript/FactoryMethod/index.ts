import ComunicatorCreator from "./Creators/ComunicatorCreator";
import MessageCreator from "./Creators/MessageCreator";
import PhoneCreator from "./Creators/PhoneCreator";

const main = (comunicatorCreator: ComunicatorCreator) => {
    console.log('LOG: using creator');
    comunicatorCreator.contact();
}

const messageCreator = new MessageCreator();
const phoneCreator = new PhoneCreator();
main(phoneCreator);
console.log('--------------------');
main(messageCreator);
