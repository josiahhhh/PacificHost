import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faSquareFacebook,
  faSquareTwitter,
  faMedium,
  faDiscord,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line import/named
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(
  faYoutube,
  faTwitter,
  faInstagram,
  faDiscord,
  faBars,
  faChevronLeft,
  faXmark
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("fontawesome", FontAwesomeIcon);
});
