<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      title: "Boolando",
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>

  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
