import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({storage: window.localStorage,supportCircular: true,})
export const store = new Vuex.Store({
    state: {
        citiesData: [],
        citiesName: ['paris', 'cergy']
    },
    getters: {
        citiesData: state => state.citiesData,
        citiesName: state => state.citiesName
    },
    mutations: {
        addNewCity(state, data) {
            state.citiesData.push(data)
        },
        addCityName(state, name) {
            console.log(state.citiesName)
            if (!state.citiesName.includes(name.toLowerCase()))
                state.citiesName.push(name.toLowerCase())
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})
