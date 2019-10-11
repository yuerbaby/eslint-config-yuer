'use strict'
// 最佳实践
var bestPractice = require('./config/best-practice')
// 变量
var variable = require('./config/variable')
// 代码风格相关
var codeStyle = require('./config/code-style')

module.exports = {
  extends: [],
  rules: Object.assign({}, bestPractice, variable, codeStyle)
}
