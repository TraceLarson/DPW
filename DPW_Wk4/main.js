// Trace Larson
// DPW Section - 01
// MVC with Events


window.addEventListener('load', function(){
  //Instantiate Singleton
  var assignment = Assignment.getInstance()
})

class Assignment{
  constructor(){
    console.log('Singleton created')
    this.controller = new Controller()
  }
  static getInstance(){
    if(!Assignment._instance){
      Assignment._instance = new Assignment()
      return Assignment._instance
    }
  }
}

class DataObject{
  constructor(e){
    console.log('DataObject created')
    this.name = e.target.parentNode[1].value
    this.temp = e.target.parentNode[2].value
    this.inches = e.target.parentNode[3].value

    document.addEventListener('object_created', objectCreated(this))
    document.dispatchEvent(new Event('object_created'))
  }
}

class Controller{
  constructor(){
    console.log('Controller created')
    const submitButton = document.getElementById('submit-button')
    submitButton.addEventListener('click', (e) =>{
      e.preventDefault()
      console.log(e)
      let dataObject = new DataObject(e)
      this.model = new Model(dataObject)
      this.view = new View(dataObject)
    })
  }
}

class Model{
  constructor(dataObject){
    console.log('Model created')

    document.addEventListener('convert_data', convertData(dataObject))
    document.dispatchEvent(new Event('convert_data'))
  }
}

class View{
  constructor(dataObject){
    console.log('View created')
    document.addEventListener('display_values', displayValues(dataObject))
    document.dispatchEvent(new Event('display_values'))
  }
}

function objectCreated(e){
  console.log(`Object Created! Name: ${e.name} , Temp: ${e.temp} , Inches ${e.inches}`)
}

function convertData(e){
  e.name = Utils.toPigLatin(e.name)
  console.log(e.name)
  e.temp = Utils.fahrenheitToCelsius(e.temp)
  console.log(e.temp)
  e.inches = Utils.feetAndInches(e.inches)
  console.log(e.inches)
}

function displayValues(e){
  console.log(`Object Display! Name: ${e.name} , Temp in Celsius: ${e.temp} , Feet and Inches ${e.inches[0]}'${e.inches[1]}"`)
  let nameDisplay = document.getElementById('name-display')
  let tempDisplay = document.getElementById('temp-display')
  let lengthDisplay = document.getElementById('length-display')

  nameDisplay.innerHTML = `<span>Piglatin Name</span><h2>${e.name}</h2>`
  tempDisplay.innerHTML = `<span>Celsius Conversion</span><h2>${e.temp}&deg Celsius</h2>`
  lengthDisplay.innerHTML = `<span>Foot and Inches</span><h2>${e.inches[0]}'${e.inches[1]}"</h2>`
}
