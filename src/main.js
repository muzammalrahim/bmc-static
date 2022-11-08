import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import BootstrapVue from 'bootstrap-vue';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue);

import './assets/main.css'

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

