import '@picocss/pico';
import './scss/styles.scss';

import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.mount('#app');
