const fs=require('fs');
//加载默认配置文件
const defaultconfig=require('./defaultconfig');
const path=require('path');
const jsonreader=require('./jsonReader/jreader').readJson;
const interfacepool=require('./jsonReader/jreader').interfacepool;
const refreshdata=require('./jsonReader/jreader').refreshdata;
let option = {

}
const j2i =()=>{
    //console.log(process.cwd())
    let config=getConfig();
   
    const {
        filepath,
        filepathto
    }=config.files;
    const {options}=config;
   
    option=Object.assign(option,options);
    
    readFileList(filepath,filepath,filepathto);
    
}
const anylizeJson = (filename,json)=>
{
    const content= JSON.parse(json);
    jsonreader(content,filename);   
    let interfacecontent=makeInterfaceInerface(interfacepool);
    refreshdata();
    return interfacecontent;

}
//遍历interfacepool,生成interface文件内容
makeInterfaceInerface=(interfacepool)=>{
    
    function readPros(pros){
        let str="\n";
        pros.forEach((item)=>{
            str+=`   ${option.readonly==true?'readonly ':""}${item.key}?:${item['type']};\n`;
        });
        return str;
    }
    let result=""
    let exportname=[]
    interfacepool.forEach((item)=>{
        const {iname,pros} = item;
        
        let interfacestr= `interface ${iname} {${readPros(pros)}};\n`;
        result+=`${interfacestr}`;
        exportname.push(iname);
        //console.log(interfacestr);
        
    });
    result+=`\n export {${exportname.join(',')}}`;
    //清空interfacepool
    
    return result

}
const readFileList=(folderpath,filepath,filepathto)=>{
    if(!fs.existsSync(filepathto))
    {
        fs.mkdirSync(filepathto);
    }
    let filelist = fs.readdirSync(folderpath,{
        encoding:'utf-8'
    });
    filelist.forEach((item)=>{

        const filecontent=fs.readFileSync(path.resolve(filepath,item),{encoding:'utf-8'});
        //console.log(filecontent);
        const iname="I"+item.split(".")[0]+(option.toD==true?".d":"")+".ts";
        const outputfilepath=path.resolve(filepathto,iname);

        const outfileconent=anylizeJson(item,filecontent);
        console.log('write file to ',outputfilepath);
        fs.writeFileSync(outputfilepath,outfileconent);
    });
    console.log('j2i parse over');   
}
const getConfig= ()=>{
    const appfile=process.cwd();
    const configname=path.resolve(appfile,'j2i.json');
    let mainconfig={};
    //如果配置文件存在
    if(fs.existsSync(configname))
    {
        let config=fs.readFileSync(configname,{
            encoding:'utf-8'
        });
        try{
            config=JSON.parse(config);
            mainconfig={
                ...defaultconfig,
                ...config
            }
        }
        catch{
            console.error('json parse error');
            mainconfig={
                ...defaultconfig,
            }
        }
        
       
       
    }
    else{
        mainconfig={
            ...defaultconfig,
        }
    }
    let files=mainconfig.files;
    for(var k in files)
    {
        files[k]=path.resolve(appfile,files[k]);
    }
    mainconfig.files=files;
    return mainconfig;
}
module.exports={
    getConfig,
    j2i
}