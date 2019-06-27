#!/usr/bin/env node

const app = require('commander')
const inquier = require('inquirer')

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
    if (answers === 'weather') {
      console.info(`Suhu hari ini panas bro`)
    } else {
      console.log('Emak nikah lagi')
    }
  })
}

app
  .version('1.0.0')
  .action(receiver)

// app
//   .version('1.0.0')
//   .option('-e, --environment [development]', 'Environment to work with', 'development')
//   .option('-n, --name [name]', 'Your Name', 'Arham Abiyan')
//   .action(options => {
//     console.log(options.environment, `Your name is ${options.name}`)
//   })

app.parse(process.argv)