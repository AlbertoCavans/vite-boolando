<script>
import { store } from "../store";

export default {
  data() {
    return { store };
  },

  methods: {
    cancelModal() {
      store.modal.show = false;
    },
  },
};
</script>

<template>
  <div class="modal">
    <div class="info-product">
      <font-awesome-icon
        class="toClick"
        @click="cancelModal()"
        icon="fa-solid fa-rectangle-xmark"
      />
      <h2>Prodotto</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 139, 0.736);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.info-product {
  width: 500px;
  background-color: white;
  padding: 2rem;
  border-radius: 20px;
  color: black;
  position: relative;
}

.toClick {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
</style>
