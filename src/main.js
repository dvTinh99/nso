import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./stores";
import router from './routes/auth.route.js'


const app = createApp(App);
app.use(router)
app.use(store)

app.mount('#app');
