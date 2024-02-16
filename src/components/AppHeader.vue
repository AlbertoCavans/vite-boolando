<script>
import { store } from "../store/index";
export default {
  data() {
    return {
      store: store,
    };
  },

  props: { headerLinks: Array },
};
</script>

<template>
  <header>
    <div class="container">
      <!-- MENU SX -->
      <nav class="menu">
        <ul>
          <li v-for="headerLink in headerLinks">
            <a :href="headerLink.url">
              {{ headerLink.text }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- LOGO -->
      <div class="logo position-absolute d-flex flex-column align-items-center">
        <a href="#">
          <img src="../assets/img/boolean-logo.png" alt="" />
        </a>
        <h5>{{ store.test }}</h5>
      </div>

      <!-- ACTIONS DX -->
      <div class="actions">
        <ul>
          <li>
            <font-awesome-icon :icon="['far', 'user']" />
          </li>
          <li>
            <font-awesome-icon :icon="['far', 'heart']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'bag-shopping']" />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

header {
  @include center-content();
  background-color: orange;
  color: white;
  padding: 10px;
  height: 90px;
}

.logo {
  left: calc(50% - 100px);
  a img {
    width: 200px;
  }
}
</style>
