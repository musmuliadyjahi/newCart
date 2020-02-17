<template>
  <div id="app">
    <Client />
    <hr />
    <FoodList msg="List Menu" />
    <hr />
    <Cart />
  </div>
</template>

<script>
import FoodList from './components/FoodList.vue';
import Cart from './components/Cart.vue';
import Client from './components/Client.vue';

export default {
  name: 'App',
  components: {
    FoodList,
    Cart,
    Client
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
