import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";


// 选项式写法
// export const useLoveTalkStore = defineStore('LoveTalk', {

//   actions:{
//     async getATalk(){
//       let reuslt = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//       let obj = {id: nanoid(), title:reuslt.data.content}
//       this.talkList.unshift(obj)
//     }
//   },

//   //配置项
//   state(){
//     return {
//       talkList:JSON.parse(localStorage.getItem('list') as string) || []
//     }
//   }
// })

//  组合式写法
import { reactive } from "vue";
export const useLoveTalkStore = defineStore('LoveTalk', ()=>{

  //  相当于state
  const talkList = reactive(JSON.parse(localStorage.getItem('list') as string) || [])

  //  相当于action
  async function getATalk(){
    let reuslt = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    let obj = {id: nanoid(), title:reuslt.data.content}
    talkList.unshift(obj)
  }
  
  return {getATalk, talkList}
})