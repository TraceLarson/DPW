window.addEventListener('load', function(){

})

class Larson_DPW{
  constructor(){
    console.log('singleton created');
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
  constructor(){

  }
}

class Controller{
  constructor(){
    console.log('Controller Created');
    this.model = new Model();
    this.view = new View();
    //code to retrieve data

  }
}

class Model{
  constructor(){
    console.log('Model Created');
    //code to do something with the data received
  }
}

class View{
  constructor(){
    console.log('View Created');
    //code to render the data in HTML

  }
}
