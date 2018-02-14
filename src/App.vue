<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

import { timeout } from './store/utils.js';

export default {
  name: 'app',
  data: () => ({
    items: [
      { name: 'mts', value: 'https://www.garage89.ru/images/statyi/mts_ru.png' },
      { name: 'megafon', value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MegaFon_sign%2Blogo_horiz_green_RU_%28RGB%29.svg/2000px-MegaFon_sign%2Blogo_horiz_green_RU_%28RGB%29.svg.png' },
      { name: 'beelain', value: 'https://inplat.ru/public/img/id/beeline.png' },
      { name: 'tele2', value: 'http://rpz-card.ru/files/sitedata/Catalog/b1b09d44-62bc-472e-8aa4-c6cdd2f8d154.png' },
      { name: 'skype', value: 'https://www.pixelslogodesign.com/blog/wp-content/uploads/2017/06/Banner-1.png' },
      { name: 'tattelecom', value: 'https://mp.akbars.ru/projects/tattelecom/images/tild6236-3335-4334-b535-336466616234__noroot.png' },
      { name: 'volna', value: 'https://volnamobile.ru/bitrix/templates/default/images/logo.svg' },
      { name: 'Vk-mobile', value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vk-mobile.svg/2000px-Vk-mobile.svg.png' }
    ]
  }),
  beforeMount() {
    timeout(10, axios.get('/api/operators')).then((response) => {
    }).catch(err => {
      this.setOperatorsList({ 'operators': this.items });
    });
  },
  methods: {
    ...mapActions({
      setOperatorsList: 'setOperatorsList'
    })
  },
};
</script>
<style lang="less">
// vuetify css
@import '../node_modules/vuetify/dist/vuetify.min.css';
</style>
