class Utils{
  constructor(){
    console.log('Accessing Utility Class')
  }
  static calcMpg(range, fuelCapacity){
    let mpg = range/fuelCapacity
    return mpg.toFixed(1)
  }
}
