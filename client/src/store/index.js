import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  supportCircular: true,
  reducer: (state) => ({ products: state.citiesName }),
});

export const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    citiesData: [],
    citiesName: ["paris", "cergy"],
  },
  getters: {
    citiesData: (state) => state.citiesData,
    citiesName: (state) => state.citiesName,
  },
  mutations: {
    addNewCity(state, data) {
      state.citiesData.push(data);
    },
    setCitiesNames(state, names) {
      name.map(() => {
        //if(!state.citiesName.includes(elem))
      });
      if (!state.citiesName.includes(names)) state.citiesName = names;
    },
    addCityName(state, name) {
      console.log(state.citiesName);
      if (!state.citiesName.includes(name)) state.citiesName.push(name);
    },
  },
});
