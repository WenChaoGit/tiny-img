module.exports = {
  tinyImg,
  getTinyParams
}

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