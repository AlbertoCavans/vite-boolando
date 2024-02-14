<script>
export default {
  data() {
    return {
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
        {
          title: "Trovaci anche su",
          links: [
            {
              name: "Icon 1",
              url: "#",
            },
            {
              name: "Icon 2",
              url: "#",
            },
            {
              name: "Icon 3",
              url: "#",
            },
          ],
        },
      ],
    };
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

      <!--       <div class="socials">
        <ul>
          <h5>Trovaci anche su</h5>
          <li><font-awesome-icon :icon="['fab', 'square-twitter']" /></li>
          <li><font-awesome-icon :icon="['fab', 'square-facebook']" /></li>
          <li><font-awesome-icon :icon="['fab', 'square-instagram']" /></li>
          <li><font-awesome-icon :icon="['fab', 'square-pinterest']" /></li>
          <li><font-awesome-icon :icon="['fab', 'square-youtube']" /></li>
        </ul>
      </div> -->
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #1a1a1a;
  padding: 20px 0;
  color: white;
}
</style>
