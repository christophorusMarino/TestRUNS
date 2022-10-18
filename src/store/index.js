import Vue from 'vue'
import Vuex from 'vuex'
import useData from './transaction/useData'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        useData,
    }
})