/*
* @Author: lx
* @Date:   2019-05-11 13:23:57
* @Last Modified by:   lx
* @Last Modified time: 2019-05-11 13:24:16
*/
export default {
  sum(...args){
    let s=0;
    args.forEach(item=>{
      s+=item;
    });

    return s;
  }
};
