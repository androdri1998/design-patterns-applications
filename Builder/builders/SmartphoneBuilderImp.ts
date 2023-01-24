import SmartphoneImp from "../models/SmartphoneImp";

interface SmartphoneBuilderImp {
    _smartphone: SmartphoneImp;

    reset: () => void;
    setScreen: (resolution: number) => void;
    setOS: (osName: string) => void;
    setCameras: (amountCameras: number) => void;
    setAudio: (isStereoAudio: boolean) => void;
    setProcessor: (processorName: string) => void;
};

export default SmartphoneBuilderImp;