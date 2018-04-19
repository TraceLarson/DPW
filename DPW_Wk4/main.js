window.addEventListener('load', function(){
  console.log(Utils.feetToInches(24))
})

class Assignment{
  constructor(){
    console.log('Singleton created')
  }
  static getInstance(){
    if(!Assignment._instance){
      Assignment._instance = new Assignment()
      return Assignment._instance
    }
  }
}

class DataObject{
  constructor(){
    console.log('DataObject created')
  }
}

class Controller{
  constructor(){
    console.log('Controller created')
    this.model = new Model()
    this.view = new View()
  }

}

class Model{
  constructor(){
    console.log('Model created')
  }
}

class View{
  constructor(){
    console.log('View created')
  }
}
