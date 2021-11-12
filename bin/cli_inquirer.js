#! /usr/bin/env node
// Node CLI 应用入口文件必须有这个文件头

const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')


inquirer.prompt([
  {
    type: 'input',
    name: 'projectName',
    message: '项目名称',
    default: 'my-node-cli'
  },
  {
    type: 'input',
    name: 'description',
    message: '描述',
    default: 'my-node-cli description'
  },
]).then(answer => {
  // 获取模板路径
  const tempPath = path.join(__dirname, 'template')

  // 将模板中的文件生成，应该从远程拉模板
  const cwdPath = process.cwd()
  fs.readdir(tempPath, (err, files) => {
    if (err) throw err

    files.forEach(f => {
      ejs.renderFile(path.join(tempPath, f), answer).then(data => {
        console.log(data)
        fs.writeFileSync(path.join(cwdPath, f), data)
      })
    })
  })

  console.log(answer)
})

