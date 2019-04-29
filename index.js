const tinify = require("tinify");
const shell = require('shelljs');
const fs = require("fs-extra");
const path = require('path');
const {api_key,src_path,out_path} = require('./config')
const {tinyImg,getTinyParams} =require('./lib/image')
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
        tinyImg(params)
    }
  })
  
 
})

