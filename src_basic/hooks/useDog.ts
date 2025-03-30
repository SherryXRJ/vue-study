import {ref, reactive} from 'vue'
import axios from 'axios'

//  用函数包裹，并暴露出去
export default function(){
  //  https://dog.ceo/api/breed/pembroke/images/random
  let dogList: string[] = reactive([])

  async function getDog(){
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      let newDog: string = result.data.message
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }

  //  向外部提供"东西"
  return {dogList, getDog}
}

