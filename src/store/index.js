import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datas:[]
  },
  getters:{
    list(state){
       return state.datas;
    }
  },
  mutations: {
    // 添加
    add(state,val){
      if(!!val){
        console.log(`${val} 添加成功`)
        state.datas.push(val);
      }
    },
    // 删除
    del(state,index){
      console.log(`${index} 删除成功`)
        state.datas.splice(index,1);
    }
  },
  actions: {

  },
  modules: {

  }
})
