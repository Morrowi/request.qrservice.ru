import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import FloatingVue from 'floating-vue';
import { vMaska } from "maska"
import "bootstrap/dist/css/bootstrap.min.css";
import "floating-vue/dist/style.css"
import './assets/css/main.css'
import './assets/css/media.css'



createApp(App)
    .use(router)
    .use(store)
    .use(FloatingVue)
    .directive("maska", vMaska)
    .mount('#app')