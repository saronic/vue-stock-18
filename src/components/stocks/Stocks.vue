<template>
  <div>
    <app-stock v-for="s in stocks" :key="s.id" :stock="s"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }

}
</script>

