import * as types from '../mutation-types';


const initialState = {
  operators: []
};

// getters
const getters = {
  getOperators: (state) => state.operators
};

// actions
const actions = {
  setOperatorsList({ commit }, { operators }) {
    commit(types.SET_OPERATORS_LIST, operators);
  }
};

// mutations
const mutations = {
  [types.SET_OPERATORS_LIST](state, operators) {
    state.operators = operators;
  }
};

export default {
  state: initialState,
  getters,
  actions,
  mutations
};
