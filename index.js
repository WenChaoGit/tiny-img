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
  shell.ls(`${src_path}/${item}`).forEach(itemChild => {
    
    let extname = path.extname(itemChild);
    let isAllowedExt = ['.png','.jpeg','.jpg'].find(item => item ==extname);
    if(isAllowedExt){
        let params = getTinyParams(item,itemChild)
        // console.log(params);return;
        tinyImg(params)
    }
  })
  
 
})

function tinyImg({src_file,out_file}) {
  const source =  tinify.fromFile(src_file);
  source.toFile(`${out_file}`,err => {
    if(err) throw err;
    console.log(`${out_file} 压缩成功`);
  });  
}

function getTinyParams(item,itemChild){
  let src_file = `${src_path}/${item}/${itemChild}`
  let out_file = `${out_path}/${item}/test${itemChild}`;
  return {src_file,out_file}
}