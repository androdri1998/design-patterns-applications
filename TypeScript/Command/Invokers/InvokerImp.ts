import CommandImp from "../Commands/CommandImp";

interface InvokerImp {
    setCommand: (command: CommandImp) => void;
    text: () => void;
}

export default InvokerImp;