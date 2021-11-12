const execa = require('execa')
const chalk = require('chalk')

const install = async (targetDir) => {
  // 执行安装
  return new Promise((resolve, reject) => {
    const child = execa('yarn', [], {
      cwd: targetDir,
      stdio: ['inherit', 'inherit', 'pipe'],
      shell: true,
    })


    child.on('exit', (code, signal) => {
      if (code || signal) {
        console.log('')
        console.log(chalk.red('yarn install 失败'))
        reject(code || signal)
      }
      resolve()
    })
  })
}

module.exports = install


