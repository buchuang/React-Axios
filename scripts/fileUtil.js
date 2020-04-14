/**
 * Created by binwang on 17/8/14.
 */
var fs = require('fs')
var path = require('path')
var _ = require('lodash')

// 读取文件存储数组
function readFilesInDir(dirUrl, option) {
  var fileArr = []

  var {excludeFiles = []} = option
  var {prefix = ''} = option

  function exclude(file) {
    return !_.includes(excludeFiles, file)
  }

  // 获取文件数组
  function readFile(readurl, name) {
    const files = fs.readdirSync(readurl)

    files.forEach(function (filename) {
      const stats = fs.statSync(path.join(readurl, filename))
      if (stats.isFile() && exclude(filename)) {
        if (!!option.format && _.isFunction(option.format)) {
          filename = option.format(filename)
        }
        const newUrl = name + '/' + filename
        fileArr.push({name: filename, fullName: newUrl})
      } else if (stats.isDirectory()) {
        var dirName = filename
        readFile(path.join(readurl, filename), name + '/' + dirName)
      }
    })
  }

  readFile(dirUrl, prefix)
  return _.chain(fileArr).filter(file => file.name && file.name !== '').sortBy((f) => f.fullName).value()
}

module.exports = {readFilesInDir: readFilesInDir}
