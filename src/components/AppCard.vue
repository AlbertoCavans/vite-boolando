<script>
export default {
  props: {
    id: Number,
    img: String,
    brand: String,
    productName: String,
    productPrice: Number,
  },

  emits: ["modal-active"],
};
</script>

<template>
  <div class="card border-0" @click="$emit('modal-active', this.id)">
    <img :src="img" :alt="productName" />

    <div class="info-product">
      <h6 class="product-brand text-secondary">{{ brand }}</h6>
      <h5 class="product-name">{{ productName }}</h5>
      <h6>
        {{ productPrice }} <span>{{ productPrice }}</span>
      </h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 3);
  padding: 10px;
}
</style>
