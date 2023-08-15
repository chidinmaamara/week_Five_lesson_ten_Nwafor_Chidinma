class Car {
    constructor(numSeats, numbHeadLamps, fuelTankMaxLitre,numbExaustPipe, convertible, numbOfDoors, numbOfEnginePlug = 4){
    this.numSeats = numSeats
    this.numbHeadLamps = numbHeadLamps
    this.fuelTankMaxLitre = fuelTankMaxLitre
    this.numbExaustPipe = numbExaustPipe 
    this.convertible = convertible
    this.numbOfDoors = numbOfDoors
    this.numbOfEnginePlug = numbOfEnginePlug
}
}
let volvo = new Car(2, 3, '50liters', 4, false, 3)
let toyota = new Car(1, 2, '30liters', 6, true, 2)
let venza = new Car(3, 7, '40liters', 3, false, 5)
let highlander = new Car(2, 4, '20liters', 4, true, 2)

console.log(volvo, toyota, venza, highlander);
