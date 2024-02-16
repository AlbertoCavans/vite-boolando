<script>
import { store } from "./store/index.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store: store,
      title: "Boolando",
      headerLinks: [
        {
          text: "Uomo",
          url: "#",
          current: false,
        },
        {
          text: "Donna",
          url: "#",
          current: false,
        },
        {
          text: "Bambino",
          url: "#",
          current: false,
        },
      ],

      footerOptions: [
        {
          title: "Boolando s.r.l.",
          links: [
            {
              name: "Informazioni legali",
              url: "#",
            },
            {
              name: "Informazioni sulla privacy",
              url: "#",
            },
            {
              name: "Diritto di recesso",
              url: "#",
            },
          ],
        },
      ],
      socialLinks: [
        {
          name: "['fab', 'square-twitter']",
          url: "#",
        },
        {
          name: "['fab', 'square-facebook']",
          url: "#",
        },
        {
          name: "['fab', 'square-instagram']",
          url: "#",
        },
        {
          name: "['fab', 'square-pinterest']",
          url: "#",
        },
        {
          name: "['fab', 'square-youtube']",
          url: "#",
        },
      ],
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <AppHeader :headerLinks="headerLinks"></AppHeader>

  <app-alert v-if="store.alert.show"></app-alert>

  <AppMain></AppMain>

  <AppFooter
    :footerOptions="footerOptions"
    :socialLinks="socialLinks"
  ></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
