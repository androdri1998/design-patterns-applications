import SmartphoneImp from "./SmartphoneImp";

class Smartphone implements SmartphoneImp {
    hasCamera: boolean;
    amountCameras?: number | undefined;
    osSystem?: string | undefined;
    screenResolution?: number | undefined;
    isStereoAudio: boolean;
    processor?: string | undefined;

    constructor() {
        this.hasCamera = false;
        this.isStereoAudio = false;
    }

    setCameras(amountCameras: number) {
        this.hasCamera = true;
        this.amountCameras = amountCameras;
    }

    setScreen(resolution: number) {
        this.screenResolution = resolution;
    }

    setOs(osName: string) {
        this.osSystem = osName;
    }

    setAudio(isStereoAudio: boolean) {
        this.isStereoAudio = isStereoAudio;
    }

    setProcessor(processorName: string) {
        this.processor = processorName;
    }
}

export default Smartphone;