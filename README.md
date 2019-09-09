### json2interface
convert json data to interface files；  
writen by @shincat.
### despection
这是一个工具，主要用于typescript项目中，当后端返回的数据接口比较复杂。省去了一个一个去写interface的步骤。

#### install
```
npm install --save-dev jsontointerface
```

#### init初始化
```
 j2i init
```
然后在你的项目目录下就会出现一个 ```j2i.json``` 的配置文件;  
和一个```j2i```的目录，
目录的大致结构  
```
+++ j2i/
+++ node_modules/
+++ package.json
+++ j2i.json
```
j2i.json 为json2interface的配置文件
数据结构为：
```json

{
    "files":{
        "filepath":"j2i",
        "filepathto":"D"
    },
    "options":{
        "readonly":true
    }
}

```
|  关键字段   | 类型  |  描述 |
|  ----  | ----  |  ----   |
|filepath  | 需要解析的json方式的目录 |   默认为j2i，建议保持默认，字符串  |
| filepathto  | interface 文件放置的位置 |  字符串,一个名叫userdata.json 将会在这个目录下编译成 Iuserdata.ts  的文件 |
|  readonly  | 是否将interface 个各个字段描述为readonly| 默认为true，都为“只可读”|

#### sample
有一个名为 ```username.json```的json文件，数据结构为：
```json
{
    "apiname":"getusername",
    "code":"456",
    "result":{
        "code":"123",
        "data":{
            "username":"shincat",
            "userinfo":"from changzhou",
            "userage":"30",
            "list":["2"]
        }
    },
    "history":[{
        "time":"34"
    }]
}
```
将 其放置在 ```j2i```目录下。
之后直接运行
```
j2i
```
根据以上```j2i.json```的配置文件的配置项，将在```D```目录下生成一个
```Iuserdata.ts```的文件。这个文件的内容为：
```typescript
interface Iuserdata {
   readonly apiname?:string;
   readonly code?:string;
   readonly result?:IData0;
   readonly history?:Array<number>;
};
interface IData0 {
   readonly code?:string;
   readonly data?:IData1;
};
interface IData1 {
   readonly username?:string;
   readonly userinfo?:string;
   readonly userage?:string;
   readonly list?:Array<number>;
};

 export {Iuserdata,IData0,IData1}
 ```
之后你就可以愉快的在你的typescript中import 这些文件，在编译器中方便的获取对象属性啦。