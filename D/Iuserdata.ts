interface Iuserdata {
       apiname?:string
       code?:string
       result?:IData3
       history?:Array<number>
};
interface IData3 {
       code?:string
       data?:IData4
};
interface IData4 {
       username?:string
       userinfo?:string
       userage?:string
       list?:Array<number>
};
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

 export {Iuserdata,IData3,IData4,Ickindex,IData2,IData0,IData1}