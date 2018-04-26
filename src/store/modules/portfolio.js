import { get } from 'https';

const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  buy_stock(state, { stockId, stockPrice, quantity }) {
    quantity = parseInt(quantity);
    const record = state.stocks.find(e => e.id == stockId);
    if (record) {
      record.quantity += quantity;
      console.log(record.id, ' 增加了 ' + quantity);
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
      });
      console.log(stockId, ' 新买了 ' + quantity);
    }
    state.funds -= quantity * stockPrice;
  },
  sell_stock(state, { stockId, quantity, stockPrice }) {
    console.log('stockPrice', stockPrice);
    const record = state.stocks.find(e => e.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += quantity * stockPrice;
    console.log('quantity', quantity, 'stockPrice ', stockPrice);
  },
  set_portfolio(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit('sell_stock', order);
  },
};

const getters = {
  stockPortfolio(state, getters2) {
    console.log('portfolio state', state.stocks);
    console.log('portfolio getters state', getters2.stocks);
    // console.log('getters', getters);
    return state.stocks.map(stock => {
      const record = getters2.stocks.find(e => (e.id = stock.id));
      console.log('record', record);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
