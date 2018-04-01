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
	getDriverName(){
    	console.log(`the driver's name is ${this.driver.getDriverName()}`)
		return this.driver.getDriverName()
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
	//Create boolean to hold done option
	let done = false
	//Create empty list to hold objects
	let carList = []
	//Set Static Variable
	Vehicle.team = document.getElementById('team-input').value
	//Set object parameters
	let name = document.getElementById('vehicle-name-input').value
	let range = parseFloat(document.getElementById('range-input').value)
	let capacity = parseFloat(document.getElementById('capacity-input').value)
	let driver = document.getElementById('driver-input').value

	for(let i = 0; i < 3; i++) {
		if(done)
			break
		else {
			checkSpecial(i)
    }
  }
  function displayInfp(){
		console.log(carList)
	}

  function checkSpecial(i) {
    //Conditional to check for special class instantiation
    if (name == 'optimus' || name == 'bumblebee') {
      let obj[i] = new Transformer(name, range, capacity, driver)
			carList.push(obj[i])
    }
    else {
      let obj[i] = new Car(name, range, capacity, driver)
      carList.push(obj[i])
    }
  }


})();
