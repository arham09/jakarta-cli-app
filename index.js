#!/usr/bin/env node

const app = require('commander')
const inquier = require('inquirer')
const chalk = require('chalk')
const { weather } = require('./src/weathers')

// const receiver = () => {
//   inquier.prompt([
//     {
//       type: 'list',
//       name: 'command',
//       message: 'What do you want to know today ?',
//       choices: ['weather', 'trends']
//     }
//   ])
//   .then(answers => {
//     if (answers.command === 'weather') {
//       weather()
//         .then(data => {
//           console.log(chalk.green(data))
//         })
//         .catch(e => {
//           console.log(e)
//         })
//     } else {
//       console.log('Emak nikah lagi')
//     }
//   })
//   .catch(e => {
//     console.error(e)
//   })
// }
async function news() {
  try {
    const getNews = await inquier.prompt([{
      type: 'list',
      name: 'news',
      message: 'Where is the source that you want to read today ?',
      choices: ['detik', 'kompas']
    }])

    console.log(getNews.news)
  } catch (error) {
    console.error('Ulala')
  }
}


async function main() {
  try {
    const getChoice = await inquier.prompt([{
      type: 'list',
      name: 'command',
      message: 'What do you want to know today ?',
      choices: ['weather', 'news']
    }])

  
    if (getChoice.command === 'weather') {
      let data = await weather()
      console.log(data)
    } else if (getChoice.command === 'news') {
      await news()
    }
  } catch (error) {
    console.log('Connect to internet please')
  }
}

app
  .version('1.0.0')
  .action(main)

app.parse(process.argv)