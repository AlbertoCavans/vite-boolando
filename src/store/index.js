import { reactive } from "vue";

export const urlAPI = "http://localhost:3000";

export const store = reactive({
  test: "Slogan",
  urlAPI: "http://localhost:3000",

  alert: {
    show: false,
    message: "",
    type: "",
    icon: "fa-rectangle-xmark",
  },

  modal: {
    show: false,
    name: "",
    brand: "",
    price: "",
  },
});
