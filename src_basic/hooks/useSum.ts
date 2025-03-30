import {ref, reactive} from 'vue'

//  用函数包裹，并暴露出去
export default function() {
  let sum = ref(0)

  function add(){
    sum.value += 1
  }

  //  向外部提供"东西"
  return {sum, add}

}
