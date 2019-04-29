const tinify = require("tinify");
const shell = require('shelljs');
const fs = require("fs-extra");
const path = require('path');
const {api_key,src_path,out_path} = require('./config')
//配置

tinify.key = api_key
//压缩
shell.ls(src_path).forEach(async item => {
  // 判断文件类型，图片的保留
  let extname = path.extname(item);
  let isAllowedExt = ['.png','.jpeg','.jpg'].find(item => item ==extname);
  if(isAllowedExt){
      let params = getTinyParams(item)
      tinyImg(params)
  }
 
})

function tinyImg({src_file,out_file}) {
  const source =  tinify.fromFile(src_file);
  await fs.mkdir(`${out_file}`,{recursive:true});
  source.toFile(`${out_file}`,err => {
    if(err) throw err;
    console.log(`${item} 压缩成功`);
  });  
}

function getTinyParams(item){
  let src_file = `${src_path}/${item}`
  let out_file = `${out_path}/${item}`;
  return {src_file,out_file}
}