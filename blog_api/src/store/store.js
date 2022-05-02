import { createStore } from "vuex";
import postModule from "../store/postStore";
import authModule from "../store/auth";

const store = createStore({
  state:{
    loading: false
  },
  mutations: {
    loadingToggle(state,data) {
      state.loading=data
    }
  },
  modules: {
    postModule,
    authModule
  }
});
export default store;