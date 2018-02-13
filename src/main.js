import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Toasted from 'vue-toasted';
import router from '@/router';
import store from '@/store';
import App from '@/App';

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(Toasted, {
  position: 'bottom-right',
  duration : 1000
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
