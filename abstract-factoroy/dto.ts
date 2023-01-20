export interface Watch {
    type: string;
    shape: string;
    getTime: () => number;
};

export interface WatchFactory {
    createPointerWatch: () => Watch;
    createDigitalWatch: () => Watch;
    createSmartWatch: () => Watch;
}