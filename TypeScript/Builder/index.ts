import SmartphoneBuilder from "./builders/SmartphoneBuilder";
import SmartphoneDirector from "./directors/SmartphoneDirector";

const main = () => {
    const smartphoneBuilder = new SmartphoneBuilder();
    const smartphoneDirector = new SmartphoneDirector(smartphoneBuilder);

    smartphoneDirector.makeLowEndSmartphone();
    const lowEndSmartphone = smartphoneBuilder.result();
    console.log('LOG: low end smartphone: ', lowEndSmartphone);

    smartphoneDirector.makeMidEndSmartphone();
    const midEndSmartphone = smartphoneBuilder.result();
    console.log('LOG: mid end smartphone: ', midEndSmartphone);

    smartphoneDirector.makeHighEndSmartphone();
    const highEndSmartphone = smartphoneBuilder.result();
    console.log('LOG: high end smartphone: ', highEndSmartphone);
};

main();