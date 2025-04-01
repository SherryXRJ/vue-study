import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

export const useLoveTalkStore = defineStore('LoveTalk', {

  actions:{
    async getATalk(){
      let reuslt = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      let obj = {id: nanoid(), title:reuslt.data.content}
      this.talkList.unshift(obj)
    }
  },

  //配置项
  state(){
    return {
      talkList:JSON.parse(localStorage.getItem('list') as string) || []
    }
  }
})
