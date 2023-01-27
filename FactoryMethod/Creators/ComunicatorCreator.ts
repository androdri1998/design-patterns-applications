import Comunicator from "../Comunicators/Comunicator";

abstract class ComunicatorCreator {
    public abstract factory(): Comunicator;

    contact() {
        const comunicator = this.factory();
        console.log('LOG: doing contact ');
        comunicator.doContact();
    }
}

export default ComunicatorCreator;