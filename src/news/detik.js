const axios = require('axios')
const cheerio = require('cheerio')
const { detik } = require('../config/config')

async function detikScraper() {
  console.log('Wait a second, getting some data for you ....')

  const result = []

  let page = await axios.get(detik)

  const $ = cheerio.load(page.data)
  
  $('article a[href]').each((index, element) => {
    // console.log(index, $(element).attr('href'))
    const data = {
      berita: parseInt(index) + 1,
      news: $(element).attr('href')
    }

    result.push(data)
  })

  console.log(result)
}

module.exports = detikScraper