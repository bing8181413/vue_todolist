import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datas:[]
  },
  getters:{
    list(state){
       if(!!state.datas)window.localStorage.setItem("values",state.datas);
       return state.datas;
    }
  },
  mutations: {
    // 添加
    add(state,val){
      if(!!val){
        state.datas.push(val);
      }
    },
    // 删除
    del(state,index){
        state.datas.splice(index,1);
    }
  },
  actions: {

  },
  modules: {

  }
})
