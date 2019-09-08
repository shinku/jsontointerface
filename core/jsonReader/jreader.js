const readJson = (json,withname)=>{
    //console.log(json);
    //console.log(withname);
    //console.log(json);
    const iname="I"+withname.split(".")[0];
    let pros=[];
    let interfacename="";
    for(var key in json)
    {
        let type=getType(json[key]);
        //const value=Symbol['value'];
       
        //如果是object 类型，向下遍历
        if(type=='object')
        {
            const iname=`Data${getInterfaceIndex()}`;
            type="I"+iname;
            readJson(json[key],iname);
        }
        //如果是数组
        if(type=='Array')
        {
            let acon=getType(json[key][0]);
            if(acon=='object')
            {
                let iname=`Data${getInterfaceIndex()}`;
                type="Array<I"+iname+">";
                readJson(json[key][0],iname);
            }
            else{
                type="Array<"+acon+">";
            }
           
        }
        pros.push({
            key,
            type,
            value:json[key]
        });
    }
    
    interfacepool.unshift(
        {
            iname,
            pros,
        }
    );
    //console.log(interfacepool.toString());
}
const getType=(content)=>{
    
    let res = typeof content;
    if(res=='object')
    {
        
        if(content instanceof Array) res='Array';
    }
    return res;
}
const interfacepool=[];

let index=0;
const getInterfaceIndex=()=>{
    return index++;
}
module.exports={
    readJson,
    interfacepool
};

