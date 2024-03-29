class Utils {
  constructor() {
    console.log('Accessing Utility Class')
  }

  static calcMpg(range, fuelCapacity) {
    var mpg = range / fuelCapacity
    return parseFloat(mpg).toFixed(1)
  }

  static calcDogYears(dob, size) {
    // This function takes in a string of format mm-dd-yyyy for the date of birth of a dog
    // and a string of "small" "medium" or "large. Reasoning being that AKC shows that a
    // dogs age depends on its overall size. All dogs are the same age until they are
    // over 5 human years old. Then the larger dogs age faster.

    var dobYear = new Date(dob).getFullYear()
    var dobMonth = new Date(dob).getMonth() + 1
    var dobDay = new Date(dob).getDate() + 1
    var todayDate = new Date()
    var todayYear = todayDate.getFullYear()
    var todayMonth = todayDate.getMonth() + 1
    var todayDay = todayDate.getDate()

    //check to see if month and day are before current month and day
    if (dobYear > todayYear || (dobYear == todayYear && dobMonth > todayMonth) ||
        (dobYear == todayYear && dobMonth == todayMonth && dobDay > todayDay)) {
      alert('Your Dog is from the future?...try again pls :)')
      return 0;
    }
    else {
      var humanYears = todayYear - dobYear
      if (todayMonth > dobMonth)
        humanYears = humanYears
      else if (todayMonth === dobMonth && todayDay >= dobDay)
        humanYears = humanYears
      else {
        humanYears = humanYears - 1
      }

      //Set new variable dogyears to current human years.
      var dogYears = humanYears

      //Conditionals to check the age of the dog and use predetermined values if they
      // are between 0 and 5 human years
      //Checks if the age is less than one and returns a decimal value for the age.
      if (dogYears < 1) {
        var monthAge = parseFloat((todayMonth - dobMonth) * (12 / 15))
        dogYears = monthAge
      }
      else if (dogYears == 1)
        dogYears = 15
      else if (dogYears == 2)
        dogYears = 24
      else if (dogYears == 3)
        dogYears = 28
      else if (dogYears == 4)
        dogYears = 32
      else if (dogYears == 5)
        dogYears = 36
      else if (dogYears > 5) {
        if (size == 'small') {
          dogYears = 36 + ((dogYears - 5) * 4)
        }
        if (size == 'medium') {
          dogYears = 36 + (dogYears - 5) * 4.5
        }
        if (size == 'large') {
          dogYears = 36 + (dogYears - 5) * 5
        }
      }
      return dogYears
    }

  }

  static async unsplashRandomPic(query, count, width, height) {
    //Gets a random image from unsplash and returns the url.
    // https://api.unsplash.com/photos/random/?count=1&query=dogs&w=200&h=200&orientation=squarish&client_id=e2a508587e823dd93b8031994e2420ed1a539716b750ed67e78b3caa09db950f
    let applicationID = '24544'
    let accessKey = 'e2a508587e823dd93b8031994e2420ed1a539716b750ed67e78b3caa09db950f'
    let secretKey = 'c236d7f56c0603c65226d16da075f5c46e7e7a4dfaffebd8954eb582be414732'
    let api = 'https://api.unsplash.com/photos/random/?'
    let imageQuery = () => {
      if (query == null)
        return 'dog'
      else
        return query
    }
    let imageCount = () => {
      if (count == null)
        return 1
      else
        return count
    }
    let imageWidth = () => {
      if (width == null)
        return 200
      else
        return width
    }
    let imageHeight = () => {
      if (height == null)
        return 200
      else
        return height
    }

    let url = `${api}count=${imageCount()}&query=${imageQuery()}&w=${imageWidth()}&h=${imageHeight()}&orientation=squarish&client_id=${accessKey}`
    console.log(url)

    let imageUrl = await fetch(url, {method: 'GET', timeout: 3000}).then(response => {
      if (response.ok)
        return response.json()
      else
        throw new Error('Bad response from server')
    }).then(dataJson => {
      console.log('INSIDE FETCH: ' + JSON.stringify(dataJson[0].urls.custom))
      return JSON.stringify(dataJson[0].urls.custom)
    })
    // console.log(imageUrl)
    return imageUrl

  }

}
