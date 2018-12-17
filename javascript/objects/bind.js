
this.car = "Honda civic";

var allanGarage = { 
    car: "Maverick",
    getCar: function(){
        return this.car;
    }
}

console.log(allanGarage.getCar());

var storeCar = allanGarage.getCar();

var realGetCar = allanGarage.getCar.bind(allanGarage); //Binds the fucrion to the objects
console.log(realGetCar());