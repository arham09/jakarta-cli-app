#!/usr/bin/env node

const inquier = require('inquirer')
const kompas = require('./kompas')
const detik = require('./detik')

async function news() {
  try {
    const getNews = await inquier.prompt([{
      type: 'list',
      name: 'news',
      message: 'Where is the source that you want to read today ?',
      choices: ['detik', 'kompas']
    }])

    if (getNews.news === 'detik') {
      await detik()
    } else if (getNews.news === 'kompas') {
      kompas()
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = news