import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    citiesData:[],
    citiesName: ['paris', 'cergy']
  },
  getters:{
    citiesData: state => state.citiesData,
    citiesName: state => state.citiesName
  },
  mutations:{
    addNewCity(state, data) {
      state.citiesData.push(data)
    },
    addCityName(state, name) {
      state.cities.push(name)
    }
  },
  actions: {
  },
  modules: {
  }
})
