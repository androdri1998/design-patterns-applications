import SmartphoneBuilderImp from "../builders/SmartphoneBuilderImp";

interface SmartphoneDirectorImp {
    _smartphoneBuilder: SmartphoneBuilderImp;

    setSmartphoneBuilder: (builder: SmartphoneBuilderImp) => void;
    makeLowEndSmartphone: () => void;
    makeMidEndSmartphone: () => void;
    makeHighEndSmartphone: () => void;
}

export default SmartphoneDirectorImp;