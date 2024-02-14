import { createApp } from "vue";

import App from "./App.vue";

import * as bootstrap from "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
library.add(faUser);
library.add(faHeart);
library.add(faShoppingBag);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
