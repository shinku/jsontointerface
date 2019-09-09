#!/usr/bin/env node
console.log('j2i starting');
const J2I = require('./core/index');
const defaultInit = require('./core/init');

const execute=()=>{
    console.log('start parse ');
    J2I.j2i();
}
if(process.argv.length==2)
{
    execute();
}
else if(process.argv.length==3)
{
    //获取命令
    const cammand=process.argv[2];
    switch(cammand)
    {
        //初始化；创建配置文件和目录
        case 'init':
                console.log('init j2i');
                defaultInit(process.cwd());
            break;
    }
}
