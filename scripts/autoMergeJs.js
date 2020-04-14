/**
 * Created by binwang on 17/7/11.
 * auto create index.js
 */

let fs = require('fs');
let Handlebars = require('handlebars');
let _ = require('lodash');
let util = require('./fileUtil');

function AutoMergeJs(options) {
}
AutoMergeJs.prototype.apply = function (compiler) {
  // compiler.plugin('emit', function (compilation, callback) {
  //   function createIndex(src, targetFile) {
  //     let files = util.readFilesInDir(src, {
  //       prefix: '.',
  //       excludeFiles: ['index.vue', 'index.js', 'index.tpl', 'controller.js', 'ext.js', 'api.js',],
  //       format: (f) => f.substring(0, _.lastIndexOf(f, '.'))
  //     });
  //
  //     targetFile.forEach(f => {
  //       let data = fs.readFileSync(src + '/' + f.template, 'utf-8');
  //       const template = Handlebars.compile(data);
  //       let result = template({
  //         list: files
  //       });
  //       try {
  //         let old = fs.readFileSync(src + '/' + f.target, 'utf-8');
  //         if (old !== result)
  //           fs.writeFileSync(src + '/' + f.target, result);
  //       } catch (e) {
  //         fs.writeFileSync(src + '/' + f.target, result);
  //       }
  //     });
  //   }
  //
  //   let _targetFile = [{
  //     template: 'index.tpl',
  //     target: 'index.js',
  //   }];
  //   createIndex('./src/actions', _targetFile);
  //   callback();
  // });
};

module.exports = AutoMergeJs;
