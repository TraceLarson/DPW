window.addEventListener('load', () => {
  //instantiate Singleton
  const assignment = Assignment.getInstance()
})

class Assignment {
  constructor() {
    console.log('Singeton Created')
    //code
    const addButton = document.getElementById('add-button')
    const displayButton = document.getElementById('display-button')

    const rangerArray = []
    let rangerInfo = {}
    let rangerColor = ''
    let myRanger = null
    let i = 0

    addButton.addEventListener('click', (e) => {
      e.preventDefault()

      //Conditional to keep track of rangers
      if (i <= 5) {

        //Get radio button value for color
        rangerColor = document.querySelector('input[name="color"]:checked').value
        document.querySelector(`input[value="${rangerColor}"]`).
            setAttribute('disabled', 'true')

        //Object to store ranger information
        rangerInfo = {
          name: e.target.parentNode[1].value,
          weapon: e.target.parentNode[2].value,
          zord: e.target.parentNode[3].value,
          color: rangerColor,
        }

        //Create new myRanger and use factory to make new ranger based off of
        // rangerInfo object
        myRanger = RangerFactory.createRanger(rangerInfo)
        rangerArray.push(myRanger)
        i++
        if (i === 5)
          alert('Your Ranger Team is full, MORPHIN TIME!')
      }
      else //Alert user that the team is FULL
        alert('Your Ranger Team is full, MORPHIN TIME!')

      e.target.form.reset()
    })

    displayButton.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(rangerArray)
    })

  }

  static getInstance() {
    if (!Assignment._instance) {
      Assignment._instance = new Assignment()
      return Assignment._instance
    }
    else
      throw 'tried to create second singleton'
  }
}
