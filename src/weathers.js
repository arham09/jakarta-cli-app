const { endpoint } = require('./config')
const axios = require('axios')

module.exports = {
  weather: async () => {
    try {
      let result = await axios.get(endpoint)

      return `The weather is ${result.data.weather[0].main}`
    } catch (error) {
      return error
    }
  }
}