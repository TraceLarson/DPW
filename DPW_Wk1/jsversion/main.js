class Vehicle{
	constructor(name, range, capacity){
		console.log('Vehicle Created')
		this.name = name
		this.range = range
		this.capacity = capacity
	}
  getName(){
		console.log(`vehicle name is ${this.name}`)
		return this.name
	}
  getRange(){
		console.log(`the vehicle range is ${this.range}`)
		return this.range
	}
  getCapacity(){
		console.log(`the fuel capacity is ${this.capacity}`)
		return this.capacity
	}
  getMpg(){
		let mpg = Utils.calcMpg(this.range, this.capacity)
    console.log(mpg)
		return mpg
  }
}

Vehicle.team = 'Autobots'

// Lease.prototype.companyName = "Enron";

class Car extends Vehicle{
	constructor(name,range,capacity, driver){
		console.log("Car Created")
		super(name,range,capacity)
		this.driver = new Driver(driver)
	}
	getDriver(){
    	console.log(`CAR the driver's name is ${this.driver.getDriverName()}`)
  }
}

class Transformer extends Vehicle{
	constructor(name, range,capacity, driver){
		console.log('Transformer Created')
		super(name, range, capacity)
		super.range = 1000000
		super.capacity = 1000000
		this.driver = new Driver(driver)
	}
	getMpg(){
		return 1000000
	}
}

class Driver{
	constructor(driverName){
		console.log('DRIVER Driver Created')
		this.name = driverName
	}
	getDriverName(){
		console.log(`DRIVER the driver's name is ${this.name}`)
		return this.name
	}
}



(function(){
	let name = 'Camaro'
	if(name == 'optimus' || name == 'bumblebee') {
    let obj1 = new Transformer(name, 500, 40, 'Trace')
		obj1.getMpg()
		console.log(Vehicle.team)
  }
	else {
     let obj1 = new Car('Corvette', 500, 30, 'Trace')
		obj1.getMpg()
    console.log(Vehicle.team)
  }

})();
