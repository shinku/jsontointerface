interface Ickindex {
   readonly apiname?:string;
   readonly code?:string;
   readonly result?:IData0;
   readonly history?:Array<IData2>;
};
interface IData2 {
   readonly time?:string;
};
interface IData0 {
   readonly code?:string;
   readonly data?:IData1;
};
interface IData1 {
   readonly username?:string;
   readonly userinfo?:string;
   readonly userage?:string;
   readonly list?:Array<string>;
};

 export {Ickindex,IData2,IData0,IData1}