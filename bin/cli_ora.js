#! /usr/bin/env node

const program = require('commander')
const package = require('../package.json')
const chalk = require('chalk')
const ora = require('ora')

const spinner = ora(chalk.green('Loading Template...'))

program
  .version(package.version)
  .command('init <name>')
  .description('create a new project')
  .action(name => {
    // console.log('create a new project: ' + name)
    // console.log('create a new project: ' + chalk.bold(name))
    // console.log('create a new project: ' + chalk.cyan(name))
    console.log('create a new project: ' + chalk.green(name))
    // console.log('create a new project: ' + chalk.bgRed(name))

    spinner.start()

    setTimeout(() => {
      spinner.stop()
      spinner.succeed('Loading Success')
    }, 5000)
    
  })

program.parse()