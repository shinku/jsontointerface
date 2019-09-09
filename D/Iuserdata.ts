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