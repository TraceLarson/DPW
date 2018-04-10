class Utils{
  constructor(){
    console.log('Accessing Utility Class')
  }
  static calcMpg(range, fuelCapacity){
    var mpg = range/fuelCapacity
    return parseFloat(mpg).toFixed(1)
  }
}
