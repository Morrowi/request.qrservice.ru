import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import FloatingVue from 'floating-vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "floating-vue/dist/style.css"
import './assets/css/main.css'
import './assets/css/media.css'



createApp(App)
    .use(router)
    .use(store)
    .use(FloatingVue)
    .mount('#app')