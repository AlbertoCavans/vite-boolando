<script>
import { store } from "../store/index";
export default {
  data() {
    return {
      store: store,
    };
  },

  props: {
    footerOptions: Array,
    socialLinks: Array,
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div v-for="footerOption in footerOptions">
        <h5>{{ footerOption.title }}</h5>
        <ul>
          <li v-for="link in footerOption.links">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>

      <div class="logo position-absolute d-flex flex-column align-items-center">
        <a href="#">
          <img src="../assets/img/boolean-logo.png" alt="" />
        </a>
        <h5>{{ store.test }}</h5>
      </div>

      <!-- SISTEMARE QUESTA PARTE PER USARE FONTAWESOME -->
      <!--       <div class="socials">
        <ul>
          <h5>Trovaci anche su</h5>
          <li>
            <font-awesome-icon
              v-for="socialLink in socialLinks"
              :href="socialLink.url"
              :icon="socialLink.name"
            />
          </li>
        </ul>
      </div> -->
      <div class="socials">
        <ul>
          <h5>Trovaci anche su</h5>
          <li><font-awesome-icon :icon="['fab', 'square-twitter']" /></li>
          <li><font-awesome-icon :icon="['fab', 'square-facebook']" /></li>
          <li><font-awesome-icon :icon="['fab', 'square-instagram']" /></li>
          <li><font-awesome-icon :icon="['fab', 'square-pinterest']" /></li>
          <li><font-awesome-icon :icon="['fab', 'square-youtube']" /></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #1a1a1a;
  padding: 20px 0;
  color: white;
}

.logo {
  left: calc(50% - 10px);
  a img {
    width: 200px;
  }
}
</style>
