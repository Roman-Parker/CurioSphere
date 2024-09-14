import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import axios from 'axios'

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

app.config.globalProperties.$axios = axios;

app.use(router);
app.use(createPinia());
app.mount('#app');

