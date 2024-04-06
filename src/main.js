import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import TrangChu from './components/TrangChu.vue';
import DangKi from './components/DangKi.vue';
import DangNhap from './components/DangNhap.vue';
import LichSu from './components/LichSu.vue';
import store from "./stores";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: TrangChu },
  { path: "/dang-ki", component: DangKi },
  { path: "/dang-nhap", component: DangNhap },
  { path: "/lich-su", component: LichSu },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(store);
app.use(router)
app.mount("#app");
