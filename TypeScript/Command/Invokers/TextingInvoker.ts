import CommandImp from "../Commands/CommandImp";
import InvokerImp from "./InvokerImp";

class TextingInvoker implements InvokerImp {
    command: CommandImp | null = null;

    setCommand(command: CommandImp) {
        this.command = command;
    }

    text() {
        if (this.command) {
            this.command.execute();
        }
    }
}

export default TextingInvoker;