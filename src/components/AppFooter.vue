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
        <h4>{{ footerOption.title }}</h4>
        <ul>
          <li v-for="link in footerOption.links">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>

      <!--       <div class="legal-section">
        <ul>
          Boolando s.r.l.
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="socials">
        <ul>
          Trovaci anche su
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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
