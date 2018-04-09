window.addEventListener('load', function () {
  console.log("page loaded");
  //instantiate singleton
  var myAssignment = AssignPrototype.getInstance();


  //Create variables for buttons
  var addObjectButton = document.getElementById('add-object-button');
  var displayInfoButton = document.getElementById('display-info-button');


  //initialize static variable
  Vehicle.prototype.team = '';

  var i = 0;


  //event listeners
  addObjectButton.addEventListener('click', function(e){
    //Reset Static Variable in case it has changed
    Vehicle.prototype.team = document.getElementById('team-input').value;
    //Set object parameters
    var range = parseFloat(document.getElementById('range-input').value);
    var capacity = parseFloat(document.getElementById('capacity-input').value);
    var driver = document.getElementById('driver-input').value;
    // get current name element to check for special class instantiation
    var name = document.getElementById('vehicle-name-input').value;
    if (i < 3) {
      myAssignment.checkSpecial(name, range, capacity, driver,i);
      i++;
      //reset non static form fields.
      document.getElementById('vehicle-name-input').value = document.getElementById('vehicle-name-input').defaultValue;
      document.getElementById('range-input').value = document.getElementById('range-input').defaultValue;
      document.getElementById('capacity-input').value = document.getElementById('capacity-input').defaultValue;
      document.getElementById('driver-input').value = document.getElementById('driver-input').defaultValue;
    }
    else
      alert('The list is full');
    // e.target.parentNode.reset()
  })


  displayInfoButton.addEventListener('click', function(e){
    //Reset Static Variable in case it has changed
    Vehicle.prototype.team = document.getElementById('team-input').value;
    myAssignment.displayInfo(e);
  })


});

//////////////////////////////////////////////////////////////Singleton
class AssignPrototype {
  constructor(){
    console.log('Singleton created.');
    //start code here
    var carList = [];


    // function to check if special class should be instantiated
    this.checkSpecial = function(name, range, capacity, driver, i) {
      //Conditional to check for special class instantiation
      if (name == 'optimus' || name == 'bumblebee') {
        carList[i] = new Transformer(name, range, capacity, driver)
      }
      else {
        carList[i] = new Car(name, range, capacity, driver)
      }
      console.log(`Car List ${carList}`)
    }


    //Display the information
    this.displayInfo = function(e) {
      e.preventDefault()
      console.log(carList)
      //get all elements with class of data and remove them so they can be re-added
      var cars = document.getElementById('car-list')
      var dataElements = document.getElementsByClassName('data')

      while (dataElements.length > 0) {
        dataElements[0].parentNode.removeChild(dataElements[0])
      }
      //loop through cars list and add object data to list item element
      carList.forEach((car) => {
        cars.innerHTML += `<tr class="data" ><td> ${Vehicle.prototype.team} </td><td> ${car.getName()} </td><td>${car.getDriverName()} </td><td>${car.getMpg()}</td></tr>`
      })
    }


  }


  static getInstance(){
    if(!AssignPrototype._instance){
      AssignPrototype._instance = new AssignPrototype();
      return AssignPrototype._instance;
    }
    else{
      throw "Tried to create second singleton";
    }
  };
}
//////////////////////////////////////////////////////////////Singleton

var Vehicle = (function (){
  function Vehicle(name, range, capacity){
    console.log("Vehicle created");
    this.name = name;
    this.range = range;
    this.capacity = capacity;
  }
  Vehicle.prototype.getName = function(){
    console.log('The Vehicle name is ' + this.name);
    return this.name;
  };
  Vehicle.prototype.getRange = function(){
    console.log('The Vehicle range is ' + this.range);
    return this.range;
  };
  Vehicle.prototype.getCapacity = function(){
    console.log('The Vehicle capacity is ' + this.capacity);
    return this.capacity;
  };
  Vehicle.prototype.getMpg = function(){
    var mpg = Utils.calcMpg(this.range, this.capacity);
    return mpg;
  };

  return Vehicle;
})();


var Car = (function(){
  Car.prototype = Object.create(Vehicle.prototype);
  function Car(name, range, capacity, driver){
    console.log('Car created');
    Vehicle.call(this, name, range, capacity);
    this.driver = new Driver(driver);
  }
  Car.prototype.getDriverName = function(){
    console.log('The Driver\'s name is ' + this.driver.getDriverName());
    return this.driver.getDriverName();
  }

  return Car;
})();


var Transformer = (function(){
  Transformer.prototype = Object.create(Vehicle.prototype);
  function Transformer(name, range, capacity, driver){
    console.log('Transformer created');
    Vehicle.call(this, name, range, capacity);
    this.range = 1000000;
    this.capacity = 1000000;
    this.driver = new Driver(driver);
  }
  Transformer.prototype.getRange = function(){
    console.log('The Transformer\'s range is ' + this.range);
    return this.range;
  };
  Transformer.prototype.getCapacity = function(){
    console.log('The Transformer\'s capacity is ' + this.capacity);
    return this.capacity;
  };
  Transformer.prototype.getDriverName = function(){
    console.log('The Driver\'s name is ' + this.driver.getDriverName());
    return this.driver.getDriverName();
  };
  Transformer.prototype.getMpg = function(){
    console.log('The Transformer\'s range is infinite');
    return 1000000;
  };

  return Transformer;
})();


var Driver = (function(){
  function Driver(driverName){
    this.driverName = driverName;
  }

  Driver.prototype.getDriverName = function(){
    console.log('the Driver\'s name is ' + this.driverName);
    return this.driverName
  }

  return Driver;
})();
