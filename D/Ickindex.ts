interface Ickindex {
       apiname?:string
       code?:string
       result?:IData0
       history?:Array<IData2>
};
interface IData2 {
       time?:string
};
interface IData0 {
       code?:string
       data?:IData1
};
interface IData1 {
       username?:string
       userinfo?:string
       userage?:string
       list?:Array<string>
};

 export {Ickindex,IData2,IData0,IData1}