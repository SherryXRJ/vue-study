import { defineStore } from "pinia";

export const useCountStore = defineStore('Count', {
  //  动作函数
  actions: {
    increment(n:any){
      this.sum += n
    }
  },
  //配置项
  state(){
    return {
      sum:6,
      info1:'',
      info2:''
    }
  },
  //  对原始数据再进行加工
  getters:{
    bigSum(state){
      return state.sum * 10
    }
  }
})
