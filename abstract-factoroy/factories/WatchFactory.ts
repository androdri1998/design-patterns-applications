import { Watch } from "../watches/Watch";

export interface WatchFactory {
    createPointerWatch: () => Watch;
    createDigitalWatch: () => Watch;
    createSmartWatch: () => Watch;
}