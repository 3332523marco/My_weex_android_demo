import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    count: 0
}

//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutations 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}

// getters are functions
const getters = {
    evenOrOdd(state) {
        return state.count % 2 === 0 ? 'even' : 'odd'
    }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations
// })

const store = new Vuex.Store({
     actions,
    mutations,
    state: {
        count: 0
    },
    getters: {
        // ids of the items that should be currently displayed based on
        // current list type and current pagination
        activeIds(state) {
            const {   count } = state
            return count % 2 === 0 ? 'even' : 'odd'
        }
    }
})

export default store
