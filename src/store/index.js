import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import foods from './modules/foods';
import clients from './modules/clients';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    foods,
    clients
  }
});
