<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },

  methods: {
    cancelAlert() {
      store.alert.show = false;
    },
  },
};
</script>

<template>
  <div class="alert" :class="store.alert.type">
    <span>{{ store.alert.message }}</span>

    <font-awesome-icon
      class="mx-2 toClick"
      @click="cancelAlert()"
      :icon="'fa-solid ' + store.alert.icon"
    />
  </div>
</template>

<style lang="scss" scoped>
.toClick {
  cursor: pointer;
}
.alert {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: start;
}
.alert.danger {
  background-color: red;
}

.alert.warning {
  background-color: yellow;
}

.alert.success {
  background-color: green;
}
.alert.info {
  background-color: cyan;
}
</style>
