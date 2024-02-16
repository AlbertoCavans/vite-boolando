<script>
import { store } from "../store/index";
import axios from "axios";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      store,
      /*       products: [
        {
          id: 1,
          frontImage: "1.webp",
          backImage: "1b.webp",
          brand: "Levi's",
          name: "Relaxed Fit",
          price: 29.99,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 2,
          frontImage: "2.webp",
          backImage: "2b.webp",
          brand: "Guess",
          name: "Roses Tee",
          price: 20.99,
          isInFavorites: true,
          badges: [
            {
              type: "discount",
              value: "-30%",
            },
          ],
        },
        {
          id: 3,
          frontImage: "3.webp",
          backImage: "3b.webp",
          brand: "Come Zucchero Filato",
          name: "Voglia di colori pastello",
          price: 129.99,
          isInFavorites: false,
          badges: [
            {
              type: "discount",
              value: "-30%",
            },
          ],
        },
        {
          id: 4,
          frontImage: "4.webp",
          backImage: "4b.webp",
          brand: "Levi's",
          name: "Tee Unisex",
          price: 14.99,
          isInFavorites: false,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 5,
          frontImage: "5.webp",
          backImage: "5b.webp",
          brand: "Maya Deluxe",
          name: "Stripe Bodice",
          price: 99.99,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 6,
          frontImage: "6.webp",
          backImage: "6b.webp",
          brand: "Esprit",
          name: "Maglione - Black",
          price: 29.99,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
          ],
        },
      ], */

      products: [],
    };
  },
  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../assets/img/" + imageName, import.meta.url);
      return imageUrl.href;
    },

    fetchProducts() {
      axios
        .get(`${store.urlAPI}/products`)
        .then((res) => {
          /* console.log(res.data); */

          this.products = res.data;
        })
        .catch((error) => {
          store.alert.message = error.message;
          store.alert.show = true;
          store.alert.type = "danger";
        });
    },
  },

  components: { AppCard },

  created() {
    this.fetchProducts();
  },
};
</script>

<template>
  <main>
    <div class="container">
      <!--       <div v-for="product in products" class="card border-0">
        <div class="box-img">
          <img
            class="img-card"
            :src="buildImagePath(product.frontImage)"
            alt=""
          />
        </div>
        <div class="info-product">
          <h6 class="product-brand text-secondary">{{ product.brand }}</h6>
          <h5 class="product-name">{{ product.name }}</h5>
          <h6>
            {{ product.price }} <span>{{ product.price }}</span>
          </h6>
        </div>
      </div> -->
      <app-card
        v-for="product in products"
        :img="buildImagePath(product.frontImage)"
        :brand="product.brand"
        :productName="product.name"
        :productPrice="product.price"
      ></app-card>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 40px 0;
}

.card {
  width: calc(100% / 3);
  padding: 10px;
}

.img-card {
  width: 100%;
}
</style>
