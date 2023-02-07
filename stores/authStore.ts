import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;

interface AuthStoreStateInterface {
  user: any;
  token: string | null;
  premium: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthStoreStateInterface => ({
    user: null,
    token: null,
    premium: false,
  }),
  actions: {
    async register(credentials: {
      name: string;
      email: string;
      phone: string;
      password: string;
      confirm: string;
    }) {
      const { data } = await axios.post(
        "https://api.pacificprofit.us/auth/register",
        credentials
      );
      console.log(data);

      window.location.href = "/login";

      return data;
    },
  },
});
