<script>
export default {
  data() {
    return {
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
    };
  },
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
      <div class="logo position-absolute">
        <a href="#">
          <img src="../assets/img/boolean-logo.png" alt="" />
        </a>
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
            <font-awesome-icon :icon="['fab', 'square-instagram']" />
            <!-- <font-awesome-icon :icon="['fas', 'bag-shopping']" /> -->
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
}

.logo {
  left: calc(50% - 100px);
  a img {
    width: 200px;
  }
}
</style>
