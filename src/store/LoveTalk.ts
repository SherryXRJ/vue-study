import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore('LoveTalk', {

  //配置项
  state(){
    return {
      talkList:[{id:'123', title:'1213'}]
    }
  }
})
