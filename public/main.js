
const displayTemp = temp => {

  let temperature = document.querySelector('.temp')

  let tempH = document.createElement('h2')

  tempH.textContent = `${temp}`

  temperature.appendChild(tempH)

}
const displayHigh = high => {

  let temphigh = document.querySelector('.high')

  let tempHighH = document.createElement('h2')

  tempHighH.textContent = `${high}`

  temphigh.appendChild(tempHighH)

}
const displayLow = low => {

  let tempLow = document.querySelector('.low')

  let tempLowH = document.createElement('h2')

  tempLowH.textContent = `${low}`

  tempLow.appendChild(tempLowH)

}
const displayHumidity = humidity => {

  let hum = document.querySelector('.hum')

  let humidityH = document.createElement('h2')

  humidityH.textContent = `${humidity}%`

  hum.appendChild(humidityH)

}
const main = () => {
  
  
  
  
  
  // 1 listen for button
  // 2 read text form input
  
  //where the button is
  let goTo = document.querySelector('.search')
  //where the input is
  let whereFrom = document.querySelector('.where')
 
  let whereFromValue = whereFrom.value

  goTo.addEventListener('click', event => {
    
    console.log(whereFromValue)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + `${whereFromValue}` + '&units=imperial&appid=ef452a943151cfcf6ac26be846527b09')
    
      .then(response => {
        return response.json()
      })
      .then(weatherAsJSON => {
        const temp = (weatherAsJSON.main.temp)
        displayTemp(temp)
        const high = (weatherAsJSON.main.temp_max)
        displayHigh(high)
        const low = (weatherAsJSON.main.temp_min)
        displayLow(low)
        const humidity = (weatherAsJSON.main.humidity)
        displayHumidity(humidity)
      })
    })   
}


document.addEventListener('DOMContentLoaded', main)
