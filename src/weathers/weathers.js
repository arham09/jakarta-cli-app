const { endpoint } = require('../config/config')
const axios = require('axios')
const chalk = require('chalk')

module.exports = {
  weather: async () => {
    try {
      let result = await axios.get(endpoint)

      let isHot = result.data.main.temp <= 29 ? 'cool' : 'hot'

      console.log(chalk.white(`The weather is ${result.data.weather[0].main} and ${isHot}, \n the temperature is ${result.data.main.temp} Celcius`))
    } catch (error) {
      return error
    }
  }
}