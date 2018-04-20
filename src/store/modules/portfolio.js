import { get } from "https";

const state = {
  funds: 10000,
  stocks: [],
}

const mutations = {
  buy_stock(state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find(e => e.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
      })
    }
    state.funds -= quantity * stockPrice;
  },
  sell_stock(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(e => e.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += quantity * stockPrice;
  }
}

const actions = {
  sellStock({ commit }, order) {
    commit('sell_stock', order);
  }
}

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(e => e.id = stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: stock.name,
        price: stock.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}