let temperature = document.querySelector('.temp')
let tempHigh = document.querySelector('.high')
let tempLow = document.querySelector('.low')
let hum = document.querySelector('.hum')

const displayTemp = temp => {
  let tempH = document.createElement('h2')
  tempH.textContent = `${Math.floor(temp)}°`
  temperature.appendChild(tempH)
}
const displayHigh = high => {
  let tempHighH = document.createElement('h2')
  tempHighH.textContent = `${Math.floor(high)}°`
  tempHigh.appendChild(tempHighH)
}
const displayLow = low => {
  let tempLowH = document.createElement('h2')
  tempLowH.textContent = `${Math.floor(low)}°`
  tempLow.appendChild(tempLowH)
}
const displayHumidity = humidity => {
  let humidityH = document.createElement('h2')
  humidityH.textContent = `${humidity}%`
  hum.appendChild(humidityH)
}
const main = () => {
  let goTo = document.querySelector('.search')
  
  goTo.addEventListener('click', event => {
    let whereFrom = document.querySelector('.where')
    let whereFromValue = whereFrom.value
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + `${whereFromValue}` + '&units=imperial&appid=ef452a943151cfcf6ac26be846527b09')
      .then(response => {
        return response.json()
      })
      .then(weatherAsJSON => {
        const temp = (weatherAsJSON.main.temp)
        temperature.textContent = ""
        displayTemp(temp)
        const high = (weatherAsJSON.main.temp_max)
        tempHigh.textContent = ""
        displayHigh(high)
        const low = (weatherAsJSON.main.temp_min)
        tempLow.textContent = ""
        displayLow(low)
        const humidity = (weatherAsJSON.main.humidity)
        hum.textContent = ""
        displayHumidity(humidity)
      })
    })   
}
document.addEventListener('DOMContentLoaded', main)