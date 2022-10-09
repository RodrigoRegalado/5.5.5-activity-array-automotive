//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule  {
    constructor(make, model, year, color, mileage) {
        super (make, model, year, color, mileage) 
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

start () {
    if(this.fuel > 0) {
        console.log('car started')
        return this.started = true 
    }
    else {
        console.log('car did not start')
        return this.started = false
    }
}

service () {
    if (this.mileage > 30000) {
        this.scheduleService = true
        return this.scheduleService 
    }
}


loadPassenger (number) {
    this.passenger = number
    if (this.passenger < this.maximumPassengers) { 
        if (this.passenger <= this.maximumPassengers) {
            return this.passenger
        }
        else {
            console.log(this.make + this.model + 'cannot fit all passengers')
        }
    }
        else {
            console.log(this.make + this.model + 'is full')
        }
}



}

car.loadPassenger(5)


//this shows how to call from this module...
let car = new Car("Mecury", "Sedan", "1965", "blue", "115000");
console.log(car)
