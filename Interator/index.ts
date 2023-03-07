import NumbersCollection from "./Aggregators/NumbersCollection";

const numbersCollection = new NumbersCollection();

numbersCollection.add(1);
numbersCollection.add(2);
numbersCollection.add(5);
numbersCollection.add(6);
numbersCollection.add(9);
numbersCollection.add(13);
numbersCollection.add(14);
numbersCollection.add(18);

const showEvenNumbersCollection = numbersCollection.getInterator();
while(!showEvenNumbersCollection.hasEnded()) {
    const number = showEvenNumbersCollection.next();
    if(number && number % 2 === 0) {
        console.log(`${number} is even`);
    }
}

const showOddNumbersCollection = numbersCollection.getInterator();
while(!showOddNumbersCollection.hasEnded()) {
    const number = showOddNumbersCollection.next();
    if(number && number % 2 !== 0) {
        console.log(`${number} is odd`);
    }
}
