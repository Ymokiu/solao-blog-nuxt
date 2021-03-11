const path = require('path')
const fs = require('fs')

const files = fs.readdirSync('archive').filter(function (file) {
  return path.extname(file).toLowerCase() === '.md';
});
console.log(files)
let attr = [];
for (let i in files) {
  var pattern = /\.{1}[md]{1,}/;
  attr.push(files[i].slice(0, pattern.exec(files[i]).index));
}

console.log(attr)

fs.writeFile("list.js",'export default ' + JSON.stringify(attr), err => {
  if(!err) console.log("生成博客列表成功!");
});
