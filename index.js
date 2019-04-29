const tinify = require("tinify");
const shell = require('shelljs');
const fs = require("fs-extra");
const {api_key,src_path,out_path} = require('./config')
//配置

tinify.key = api_key
//压缩
shell.ls(src_path).forEach(async item => {
  const source =  tinify.fromFile(`${src_path}/${item}`);
  await fs.mkdir(`${out_path}/test`,{recursive:true});
  source.toFile(`${out_path}/test/${item}`,err => {
    if(err) throw err;
    console.log(`${item} 压缩成功`);
  });  
})