class Vehicle {
  constructor(name, range, capacity) {
    console.log('Vehicle Created')
    this.name = name
    this.range = range
    this.capacity = capacity
  }

  getName() {
    console.log(`vehicle name is ${this.name}`)
    return this.name
  }

  getRange() {
    console.log(`the vehicle range is ${this.range}`)
    return this.range
  }

  getCapacity() {
    console.log(`the fuel capacity is ${this.capacity}`)
    return this.capacity
  }

  // call the utility class to calculate the miles per gallon of the vehicle
  getMpg() {
    let mpg = Utils.calcMpg(this.range, this.capacity)
    console.log(mpg)
    return mpg
  }
}
//Static variable
Vehicle.team = 'Autobots'

//concrete class
class Car extends Vehicle {
  constructor(name, range, capacity, driver) {
    console.log('Car Created')
    super(name, range, capacity)
    this.driver = new Driver(driver)
  }
  //get the driver's name
  getDriverName() {
    console.log(`the driver's name is ${this.driver.getDriverName()}`)
    return this.driver.getDriverName()
  }
}

//special class
class Transformer extends Vehicle {
  constructor(name, range, capacity, driver) {
    console.log('Transformer Created')
    super(name, range, capacity)
    super.range = 1000000
    super.capacity = 1000000
    this.driver = new Driver(driver)
  }

  //Method to get the drivers name of the aggregate class driver
  getDriverName() {
    console.log(`the driver's name is ${this.driver.getDriverName()}`)
    return this.driver.getDriverName()
  }

  //method to return the mpg of a Transformer
  getMpg() {
    return 1000000
  }
}

//aggregate class
class Driver {
  constructor(driverName) {
    console.log('Driver Created')
    this.name = driverName
  }

  //method to return driver's name
  getDriverName() {
    console.log(`DRIVER the driver's name is ${this.name}`)
    return this.name
  }
}

(function() {
  //Create variables for buttons
  let addObjectButton = document.getElementById('add-object-button')
  let displayInfoButton = document.getElementById('display-info-button')
  //Create empty list to hold objects
  let carList = []
  //Set Static Variable
  Vehicle.team = document.getElementById('team-input').value
  //Set object parameters
  let range = parseFloat(document.getElementById('range-input').value)
  let capacity = parseFloat(document.getElementById('capacity-input').value)
  let driver = document.getElementById('driver-input').value
  let cars = document.getElementById('car-list')

  let i = 0
  //Event listeners
  addObjectButton.addEventListener('click', (e) => {
    let name = document.getElementById('vehicle-name-input').value
    if(i < 3) {
      checkSpecial(name)
      e.target.parentNode.reset()
      i++
    }else
      alert("The list is full")
  })
  displayInfoButton.addEventListener('click', (e) => {
    displayInfo(e)
  })

  //function to display the information
  function displayInfo(e) {
    e.preventDefault()
    console.log(carList)

    //get all elements with class of data and remove them so they can be re-added
    let dataElements = document.getElementsByClassName('data')
    while(dataElements.length > 0){
      dataElements[0].parentNode.removeChild(dataElements[0])
    }
    //loop through cars list and add object data to list item element
    carList.forEach((car) => {
      cars.innerHTML += `<tr class="data" ><td> ${Vehicle.team} </td><td> ${car.getName()} </td><td> 
${car.getDriverName()} </td><td>\n' +
          '${car.getMpg()}</td></tr>`
    })
  }
  // function to check if special class should be instantiated
  function checkSpecial(name) {
    //Conditional to check for special class instantiation
    if (name == 'optimus' || name == 'bumblebee') {
      carList[i] = new Transformer(name, range, capacity, driver)
    }
    else {
      carList[i] = new Car(name, range, capacity, driver)
    }
    console.log(`Car List ${carList}`)
  }

})()
