class RangerFactory{
  constructor(){}
  static createRanger(type){
    let ranger = null
    if(type.color === 'red'){
      //instantiate new red ranger
      ranger = new RedRanger(type)
    }
    else if(type.color === 'yellow'){
      //instantiate new yellow ranger
      ranger = new YellowRanger(type)
    }
    else if(type.color === 'blue'){
      //instantiate new blue ranger
      ranger = new BlueRanger(type)
    }
    else if(type.color === 'black'){
      //instantiate new black ranger
      ranger = new BlackRanger(type)
    }
    else if(type.color === 'pink'){
      //instantiate new pink ranger
      ranger = new PinkRanger(type)
    }
    else
      throw 'That is not a valid ranger color'

    return ranger
  }
}
