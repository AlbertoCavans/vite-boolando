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
      <nav class="menu">
        <ul>
          <li v-for="headerLink in headerLinks">
            <a :href="headerLink.url">
              {{ headerLink.text }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="logo">
        <a href="#">
          <img src="../assets/img/boolean-logo.png" alt="" />
        </a>
      </div>

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
}

.logo a img {
  width: 200px;
}
</style>
