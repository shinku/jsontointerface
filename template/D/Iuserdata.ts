interface Iuserdata {
       apiname?:string;
       code?:string;
       result?:IData3;
       history?:Array<number>;
};
interface IData3 {
       code?:string;
       data?:IData4;
};
interface IData4 {
       username?:string;
       userinfo?:string;
       userage?:string;
       list?:Array<number>;
};

 export {Iuserdata,IData3,IData4}