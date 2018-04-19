import stocks from '../../data/stocks';

const state = {
  stocks: [],
};

const mutations = {
  set_stocks(state, stocks) {
    state.stocks = stocks;
  },
  rnd_stocks(state) {

  } 
};

const actios = {
  buyStock: ({ commit }, order) => {

  },
  initStocks: ({ commit }) => {
    commit('set_stocks', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('rnd_stocks');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  getters,
  actios,
}