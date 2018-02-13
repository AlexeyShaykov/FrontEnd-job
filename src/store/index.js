import Vue from 'vue';
import Vuex from 'vuex';
import operators from './modules/operators';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    operators
  },
  strict: debug
});
