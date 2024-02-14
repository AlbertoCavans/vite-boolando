<script>
export default {
  data() {
    return {
      links: [
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
          <li v-for="link in links">
            <a :href="link.url">
              {{ link.text }}
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
          <li></li>
          <li></li>
          <li></li>
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

  ul li {
    display: inline-block;
    padding: 0 5px;
  }

  .logo a img {
    width: 200px;
  }
}
</style>
