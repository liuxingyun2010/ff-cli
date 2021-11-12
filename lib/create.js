const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')
const download = require('./download')

module.exports = async function (name, options) {
  // 当前目录
  const cwd = process.cwd()

  // 需要创建目录地址
  const targetPath = path.join(cwd, name)

  if (fs.existsSync(targetPath)) {
    // 判断传过来的options force是否强制覆盖
    if (options.force) {
      fs.remove(targetPath)
    } else {
      // TODO
      const { action } = await inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'Target directory has already exists, Pick an action:',
        choices: [{
          name: 'Overwrite',
          value: 'overwrite'
        }, {
          name: 'cancel',
          value: false
        }]
      }])

      if (!action) {
        return
      } else if (action === 'overwrite') {
        // 目录已经存在
        await fs.remove(targetPath)
      }
    }
  }

  // 开始下载模板
  await download(targetPath, name, 'Download template...')
}