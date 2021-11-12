const ora = require('ora')
const chalk = require('chalk')
const downloadGitRepo = require('download-git-repo')
const util = require('util')

const installDependences  = require('./auto-install')


const download = async (destPath, name, message) => {
  const downloadPeomise = util.promisify(downloadGitRepo)

  const spinner = ora(message)
  spinner.start()

  try {
    await downloadPeomise('aotuzuche/atzuche-backstage-template', destPath, {
      clone: true
    })

    spinner.succeed()

    // 进入目录自动安装 yarn
    await installDependences(destPath)

    // 模板使用提示
    console.log(`\r\nSuccessfully created project ${chalk.cyan(name)}`)
    console.log(`\r\ncd ${chalk.cyan(name)}`)
    console.log('\r\nnpm run dev\r\n')
  } catch (error) {
    console.log(`${chalk.red('Download template fail')}`)
    spinner.fail()
    throw error
    process.exit(1)
  }
}



module.exports = download