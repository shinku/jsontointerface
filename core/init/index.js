const defaultjson=
`
{
    "files":{
        "filepath":"j2i",
        "filepathto":"D"
    },
    "options":{
        "readonly":true,
        "toD":true
    }
}
`
const j2ifold='j2i';
const path=require('path');
const fs=require('fs');
const createDefaultProject=(_path)=>{

    try{
        //生成配置文件
        fs.writeFileSync(path.resolve(_path,'./j2i.json'),defaultjson,{
            encoding:'utf-8'
        });
        //生成json文件目录
        fs.mkdirSync(path.resolve(_path,'./j2i/'));
    }
    catch(e){
        console.log(e.toString())
    }
  
}
module.exports=createDefaultProject;