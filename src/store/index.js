import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import operators from './modules/operators';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  modules: {
    operators
  },
  strict: debug
});
