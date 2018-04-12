class Utils{
  constructor(){
    console.log('Accessing Utility Class')
  }


  static calcMpg(range, fuelCapacity){
    var mpg = range/fuelCapacity
    return parseFloat(mpg).toFixed(1)
  }

  static calcDogYears(dob, size){
    var dobYear = new Date(dob).getFullYear();
    // console.log(dobYear);
    var dobMonth = new Date(dob).getMonth()+1;
    // console.log(dobMonth);
    var dobDay = new Date(dob).getDate()+1;
    // console.log(dobDay);
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    // console.log(todayYear);
    var todayMonth = todayDate.getMonth()+1;
    // console.log(todayMonth);
    var todayDay = todayDate.getDate();
    // console.log(todayDay);

    //check to see if month and day are before current month and day
    var humanYears = todayYear - dobYear;
    if(todayMonth > dobMonth)
      humanYears = humanYears;
    else if (todayMonth === dobMonth && todayDay >= dobDay)
      humanYears = humanYears;
    else {
      humanYears = humanYears -1;
    }
    console.log(humanYears);

    var dogYears = humanYears;
    if(dogYears < 1){
      var monthAge = parseFloat((todayMonth - dobMonth) * (12/15));
      dogYears = monthAge;
    }
    else if(dogYears == 1)
      dogYears = 15;
    else if (dogYears == 2)
      dogYears = 24;
    else if(dogYears == 3)
      dogYears = 28;
    else if(dogYears == 4)
      dogYears = 32;
    else if(dogYears == 5)
      dogYears = 36
    else if(dogYears > 5){
      if(size == 'small'){
        dogYears = 36 + ((dogYears -5)*4);
      }
      if(size == 'medium'){
        dogYears = 36 + (dogYears -5)*4.5;
      }
      if(size == 'large'){
        dogYears = 36 + (dogYears -5)*5;
      }
    }
    return dogYears;
  }


}
