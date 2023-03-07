interface InteratorImp {
    currentPosition: () => number;
    next: () => number | undefined;
    isEmpty: () => boolean;
    hasEnded: () => boolean;
}

export default InteratorImp;