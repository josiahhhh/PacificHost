import { createStore } from "vuex";
import axios from "axios";

axios.defaults.withCredentials = true;

export interface State {
  user: any;
  premium: any;
  token: string | null;
}

const store = createStore<State>({
  state: {
    user: null,
    premium: false,
    token: null,
  },
  mutations: {
    setSession(state, session) {
      if (session) {
        state.user = session.user;
        localStorage.setItem("user", session.user.email);
        localStorage.setItem("premium", session.user.premium || false);
      } else {
        state.user = null;
        state.premium = false;
        localStorage.removeItem("user");
      }
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    initializeStore(state) {
      if (localStorage.getItem("user")) {
        state.user = localStorage.getItem("user");
      }
      if (localStorage.getItem("premium")) {
        state.premium = localStorage.getItem("premium");
      }
      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
      }
    },
  },
  actions: {
    async register({ commit }, { credentials, callback }) {
      try {
        const { data } = await axios.post(
          "https://api.pacificprofit.us/auth/register",
          credentials
        );

        callback(null);
        window.location.href = "/login";
      } catch (error: any) {
        callback(error?.response.data.message);
      }
    },
    async login({ commit }, { credentials, callback }) {
      try {
        const { data } = await axios.post(
          "https://api.pacificprofit.us/auth/login",
          credentials
        );

        callback(null);
        commit("setSession", data);
      } catch (error: any) {
        callback(error.response.data.message);
      }
    },
    async logout({ commit }) {
      localStorage.removeItem("user");
      commit("setSession", null);

      await axios.post("https://api.pacificprofit.us/auth/logout");
    },
    async premium({ commit }, { code, callback }) {
      try {
        const { data } = await axios.post(
          "https://api.pacificprofit.us/auth/premium",
          { code }
        );

        callback(null);
        commit("setSession", data);
      } catch (error: any) {
        callback(error.response.data.message);
      }
    },
    async token({ commit }) {
      try {
        const { data } = await axios.get(
          "https://api.pacificprofit.us/auth/token"
        );

        commit("setToken", data.token);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
