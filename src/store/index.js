import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {UsuarioLogin} from '@/models/UsuarioLogin.js'

export default new Vuex.Store({
  state: {
    usuarioLogin:new UsuarioLogin()
  },
  mutations: {
    setUsuarioLogin(state,usuarioLogin){
      state.usuarioLogin=usuarioLogin;
    }
  },
  getters:{
    getLogado: state =>{
      return state.usuarioLogin;
    }
  },
  actions: {
    setUsuarioLogin(context,usuarioLogin){
      context.commit('setUsuarioLogin',usuarioLogin);
    }
  },
  modules: {
  }
})
