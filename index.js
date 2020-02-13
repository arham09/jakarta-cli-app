#!/usr/bin/env node

const app = require('commander')
const inquier = require('inquirer')
const chalk = require('chalk')
const { weather } = require('./src/weathers/weathers')
const news = require('./src/news')

async function main() {
  try {
    console.log(chalk.green(`Welcome here is some features that has been implemented`))

    const getChoice = await inquier.prompt([{
      type: 'list',
      name: 'command',
      message: 'What do you want to know today ?',
      choices: ['weather', 'news']
    }])

  
    if (getChoice.command === 'weather') {
      await weather()
    } else if (getChoice.command === 'news') {
      await news()
    }
  } catch (error) {
    console.log(error)
  }
}

app
  .version('1.0.0')
  .action(main)

app.parse(process.argv)