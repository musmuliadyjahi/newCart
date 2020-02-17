<template>
  <div class="cart">
    <div class="foods">
    <ul>
      <li v-for="client in clients" :key="client.id">
        {{ client.name }}
      </li>
    </ul>
      <ul>
        <li v-for="food in foods" :key="food.id">
          {{ food.title }} - {{ food.price }} - {{ food.quantity }}
        </li>
      </ul>
    </div>
    <p>Discount: {{ discount }}</p>
    <p>Total : {{ total }}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'Cart',
  props: {
    msg: String
  },

  computed: {
    ...mapGetters({
      foods: 'cartFoods',
      total: 'cartTotal'
      // discount: 'cartDiscount'
    }),

    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    })
  },

  methods: {
    ...mapActions(['checkout'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
