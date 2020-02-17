export default {
  state: {
    newClient: '',
    clients: ['']
  },

  getters: {
    getClients(state) {
      return state.clients;
    }
  },

  mutations: {
    setNewClient(state, value) {
      state.newClient = value;
    },

    addClient(state) {
      state.clients.push({
        name: state.newClient
      });
    }
  },

  actions: {
    addClient(context) {
      context.commit('addClient');
      context.commit('setNewClient', '');
    }
  }
};
