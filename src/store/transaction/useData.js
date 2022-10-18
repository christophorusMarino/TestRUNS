import axios from "axios";

export default {
    state: {
        transcations: [],
    },

    getters: {
        transactions(state) {
            return state.transactions
        },
    },

    mutations: {
        SET_TRANSACTIONS(state, transactions) {
            state.transactions = transactions
        },
    },

    actions: {
        getTransactions({ commit }) {
            try {
                axios.get('get-all-transaction', {
                    headers: {
                        "apiKey": "apiKeyDatabase",
                        "signature": "MTcwYmQ0OGY2MTRkNDVmZWIyZGFjZTU2YTBkNmQxYzYzZDgzMzUyODA5YzFmMGY0N2IzOWVkOWVkYjEwMmU2MQ==",
                        "timestamp": "1643015022"
                    }
                })
                    .then((response) => {
                        commit('SET_TRANSACTIONS', response.data.data)
                    })
                    .catch(() => {
                        commit('SET_TRANSACTIONS', [])
                    })
            } catch (e) {
                commit('SET_TRANSACTIONS', [])
            }
        }
    }
}