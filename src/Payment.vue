<template>
  <v-app>
    <v-layout>
      <v-flex sm6 offset-sm3>
        <v-card>
          <router-link :to="{ path: '/' }">Главная</router-link>
          <v-card-media :src="operatorLogo" height="80px">
          </v-card-media>
          <v-spacer></v-spacer>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Телефон"
              v-model="phone"
              :rules="phoneRules"
              prepend-icon="phone"
              mask="phone"
              required
              :disabled="loading">
              </v-text-field>
            <v-text-field
              label="Сумма"
              v-model="amount"
              mask="####"
              :rules="amountRules"
              prepend-icon="money"
              required
              :disabled="loading">
            </v-text-field>
            <v-btn
              @click="submit"
              :disabled="!valid || loading"
              block color="primary">
              ПОПОЛНИТЬ
            </v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <v-progress-linear
      v-show="loading"
      v-bind:indeterminate="loading">
    </v-progress-linear>
  </v-app>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import Vue from 'vue';

import { timeout } from './store/utils.js';

export default {
  data: () => ({
    loading: false,
    operator: '',
    operatorLogo: '',
    valid: true,
    phone: '',
    phoneRules: [
      (v) => !!v || 'Обязательное поле',
      (v) => v && v.length === 10 || 'Номер должен быть (xxx) xxx - xxxx'
    ],
    amount: '',
    amountRules: [
      (v) => !!v || 'Обязательное поле',
      (v) => v >= 1 && v <= 1000 || 'мин. 1 рубль - макс. 1000'
    ]
  }),
  computed: {
    ...mapGetters({
      operators: 'getOperators'
    }),
    operatorName() {
      this.operator = this.$route.params.operator;
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        Vue.toasted.info('Пополняю');
        timeout(2000, axios.post('/api/submitPayment', {
          name: this.operator,
          phone: this.phone,
          amount: this.amount
        })).then((response) => {

        }).catch(err => {
          this.loading = false;
          const randomSucces = Math.random() >= 0.5;
          if (randomSucces) {
            Vue.toasted.success('Успешная оплата');
            this.$router.replace('/');
            return;
          }
          Vue.toasted.error('Ошибка оплаты');
          this.valid = false;
        });
      }
    }
  },
  beforeMount() {
    if (this.operators.length === 0) {
      this.$router.replace('/');
      return;
    }
    this.operator = this.$route.params.operator;
    this.operatorLogo = this.operators.filter(operator => {
      return operator.name === this.operator;
    })[0].value;
  }
};
</script>

<style lang="less">
 .card__media__background {
   background-size: contain!important;
 }
 .toasted {
   font-family: 'Roboto';
   color: #fff!important;
   border: .1rem solid #454d5d;
   background: rgba(69, 77, 93, .9)!important;
   border-radius: .2rem;
   &.success {
     background: rgba(50, 182, 67, .9)!important;
     border-color: #32b643;
     font-weight: 500;
   }
   &.error {
     background: rgba(232, 86, 0, .9)!important;
     border-color: #e85600!important;
     font-weight: 500;
   }
 }
</style>
