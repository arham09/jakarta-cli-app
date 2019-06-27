#!/usr/bin/env node

const app = require('commander')
const inquier = require('inquirer')
const chalk = require('chalk')
const { weather } = require('./src/weathers')

const receiver = () => {
  inquier.prompt([
    {
      type: 'list',
      name: 'command',
      message: 'What do you want to know today ?',
      choices: ['weather', 'trends']
    }
  ])
  .then(answers => {
    if (answers.command === 'weather') {
      weather()
        .then(data => {
          console.log(chalk.green(data))
        })
    } else {
      console.log('Emak nikah lagi')
    }
  })
}

app
  .version('1.0.0')
  .action(receiver)

app.parse(process.argv)