import { defineStore } from "pinia";

export const useCountStore = defineStore('Count', {

  //配置项
  state(){
    return {
      sum:6
    }
  }
})
