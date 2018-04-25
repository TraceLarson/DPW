window.addEventListener('load', function(){
  //Instantiate Singleton
  var singleton = new Larson_DPW();
})

class Larson_DPW{
  constructor(){
    console.log('Singleton created');
    //instantiate controller
    var controller = new Controller();
  }

  static getInstance(){
    if(!Larson_DPW._instance){
      Larson_DPW._instance = new Larson_DPW();
      return Larson_DPW;
    }
    else{
      throw 'Cannot create a second singleton!';
    }
  }
}

class DataObject{
  constructor(name, dob, size){
    console.log('Data Object created');
    this.name = name;
    this.dob = dob;
    this.size = size;

    document.addEventListener('create_dog', createDog(this))
    document.dispatchEvent(new Event('create_dog'))
  }
}

class Controller{
  constructor(){
    console.log('Controller Created');
    this.model = new Model();
    this.view = new View();

    // const created = new Event('created')

    //code to retrieve data
    document.getElementById('submit-button').addEventListener('click', (e)=>{
      e.preventDefault();

      var name = document.getElementById('name-input').value;
      var dob = document.getElementById('dob-input').value;
      var size = document.getElementById('size-input').value;

      var newDog = new DataObject(name, dob, size);
      var dogAge = this.model.getDogYears(newDog);
      this.view.showData(newDog, dogAge);

    })
  }
}

class Model{
  constructor(){
    console.log('Model Created');
  }
  //code to do something with the data received using the utils class
  getDogYears(dog){
    console.log('calculatig dog years');
    var dogAge = Utils.calcDogYears(dog.dob, dog.size);
    console.log('Your dog is ' + dogAge + ' years old');
    return dogAge;
  }
}

class View{
  constructor(){
    console.log('View Created');
    //code to render the data in HTML

  }
  showData(data, product, url){
    var dataDisplay = `<h3>Dog Name: ${data.name}</h3><p>Size: ${data.size}</p><p>DOB:${data.dob}</p><p>Your Dog's age in dog years is ${product}</p>`
    document.getElementById('dog-display').innerHTML = dataDisplay;
  }
}

function createDog(e){
  console.log(`Custom Event Dispatched! Dog Name: ${e.name} Dog DOB: ${e.dob} Dog Size: ${e.size}`)
}
