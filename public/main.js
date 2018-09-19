let weather = document.querySelector(".update")
class WheatherUpdate {
  constructor (whereTo) {
    this.parent = document.querySelector(whereTo)
  }
  updateWeather (what, update, symbol) {
    let newH = document.createElement('h2')
    newH.textContent = what + update + symbol
    this.parent.appendChild(newH)
  }
}
class WeatherAPI {
  constructor(json) {
    this.json = json
  }
  iHaveTwoClasses (json) {
    const weatherUpdate = new WheatherUpdate('.update')
    weatherUpdate.updateWeather("Temp(F): ", Math.floor(json.main.temp), "°")
    weatherUpdate.updateWeather("High(F): ", Math.floor(json.main.temp_max), "°")
    weatherUpdate.updateWeather("Low(F): ", Math.floor(json.main.temp_min), "°")
    weatherUpdate.updateWeather("Humidity: ", json.main.humidity, "%")
  }
}
const main = () => {
  let goTo = document.querySelector('.search')
  
  goTo.addEventListener('click', event => {
    let whereFrom = document.querySelector('.where')
    let whereFromValue = whereFrom.value
    let url
    if (isNaN(parseInt(whereFromValue))) {
        url = ('http://api.openweathermap.org/data/2.5/weather?q=' + `${whereFromValue}` + '&units=imperial&appid=ef452a943151cfcf6ac26be846527b09')
        } else {
          url = ('http://api.openweathermap.org/data/2.5/weather?zip=' + `${whereFromValue}` + '&units=imperial&appid=ef452a943151cfcf6ac26be846527b09')
    }
   fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        weather.textContent = ''
        let weatherAPI = new WeatherAPI(json)
          weatherAPI.iHaveTwoClasses(json)
      })
    })   
}
document.addEventListener('DOMContentLoaded', main)