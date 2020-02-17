<template>
  <div class="client">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="newClient" id="newClient" />
    <button type="button" @click.prevent="addClient">Add</button>
    <ul>
      <li v-for="client in clients" :key="client.id">
        {{ client.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Client',
  props: {
    msg: String
  },

  computed: {
    newClient: {
      get() {
        return this.$store.state.newClient;
      },
      set(value) {
        this.$store.commit('setNewClient', value);
      }
    },
    ...mapState(['clients']),

    ...mapGetters({
      clients: 'getClients'
    })
  },

  methods: {
    ...mapActions(['addClient'])
  }
};
</script>
