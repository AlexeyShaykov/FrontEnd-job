<template>
    <v-app>
      <v-layout>
        <v-flex sm6 offset-sm3>
          <v-card>
             <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Выберите оператора</h3>
                </div>
                </v-card-title>
            <v-container fluid hover>
              <v-layout row wrap>
                <v-flex
                  xs4
                  v-for="(item, index) in operators"
                  :key="index"
                >
                  <v-card flat tile append hover
                  :to="{ name: 'payment', params: { operator: item.name }}">
                    <v-card-media
                      :src="item.value"
                      height="150px">
                    </v-card-media>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
computed: {		
 -    ...mapGetters({		
 -      operators: 'getOperators'		
 -    })		
 -  },
};
</script>

<style lang="less">
.card__media__background {
  background-size: contain!important;
}
</style>
