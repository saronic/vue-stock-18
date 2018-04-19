<template>
  <div>
    <app-stock v-for="s in stocks" :key="s.id"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  data() {
    return {
      stocks: [
        {id: 1, name: 'bmw', price: 100},
        {id: 2, name: 'google', price: 100},
        {id: 3, name: 'apple', price: 50},
        {id: 4, name: 'twitter', price: 150},
      ]
    }
  },
  components: {
    appStock: Stock,
  }
}
</script>

