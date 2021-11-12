#! /usr/bin/env node

const spawn = require('cross-spawn')
const chalk = require('chalk')

const dependencies = ['react', 'react-dom', 'react-router-dom']

// 执行安装
const child = spawn('yarn', ['add', '-D'].concat(dependencies), {
  stdio: 'inherit'
})

child.on('close', (code) => {
  if (code !== 0) {
    console.log(chalk.red('Error ocurred while installing dependencies'))
    process.exit(1)
  } else {
    console.log(chalk.cyan('Installing success'))
  }
})