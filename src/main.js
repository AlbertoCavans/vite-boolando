import { createApp } from "vue";

import App from "./App.vue";
import AppAlert from "./components/AppAlert.vue";

import * as bootstrap from "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquarePinterest } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
library.add(faUser);
library.add(faHeart);
library.add(faShoppingBag);
library.add(faSquareInstagram);
library.add(faSquareTwitter);
library.add(faSquareFacebook);
library.add(faSquarePinterest);
library.add(faSquareYoutube);
library.add(faRectangleXmark);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("app-alert", AppAlert);
app.mount("#app");
