export interface Watch {
    type: string;
    shape: string;
    getTime: () => number;
};

export interface SmartWatch extends Watch {
    canOpenApps: () => boolean;
}