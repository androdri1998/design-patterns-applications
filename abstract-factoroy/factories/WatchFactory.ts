import { SmartWatch, Watch } from "../watches/Watch";

export interface WatchFactory {
    createPointerWatch: () => Watch;
    createDigitalWatch: () => Watch;
    createSmartWatch: () => SmartWatch;
}