import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cart from './views/cart/cart.js';
import lists from './views/list/list.js';
export default new Vuex.Store({
  modules:{
    cart,lists
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
