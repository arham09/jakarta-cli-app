const { endpoint } = require('./config')
const axios = require('axios')

module.exports = {
  weather: async () => {
    try {
      let result = await axios.get(endpoint)

      let isHot = result.data.main.temp <= 29 ? 'cool' : 'hot'

      return `The weather is ${result.data.weather[0].main} and ${isHot}, the temperature is ${result.data.main.temp} Celcius`
    } catch (error) {
      return error
    }
  }
}