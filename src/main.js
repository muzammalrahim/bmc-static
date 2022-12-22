import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf";
// import Vue3Html2pdf from 'vue3-html2pdf'
// import VueHtml2pdf from 'vue-html2pdf'
import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";



import './assets/main.css'

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
// app.use(Vue3SimpleHtml2pdf);
// app.use(Vue3Html2pdf);
// app.use(VueHtml2pdf)
app.mount("#app");

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

