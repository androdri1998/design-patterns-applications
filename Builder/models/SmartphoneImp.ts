interface SmartphoneImp {
    hasCamera: boolean;
    amountCameras?: number;
    osSystem?: string;
    screenResolution?: number;
    isStereoAudio: boolean;
    processor?: string;

    setCameras: (amountCameras: number) => void;
    setScreen: (resolution: number) => void;
    setOs: (osName: string) => void;
    setAudio: (isStereoAudio: boolean) => void;
    setProcessor: (processorName: string) => void;
};

export default SmartphoneImp;