import { createWebHistory, createRouter } from 'vue-router'

import TrangChu from '../components/TrangChu.vue';
import DangKi from '../components/DangKi.vue';
import DangNhap from '../components/DangNhap.vue';
import LichSu from '../components/LichSu.vue';
// const routes = [
//     { path: "/", name: 'home',component: TrangChu },
//     { path: "/dang-ki", name: 'register',component: DangKi },
//     { path: "/dang-nhap", name: 'login',component: DangNhap },
//     { path: "/lich-su", name: 'history',component: LichSu },
//   ];
  
//   const router = createRouter({
//     history: createMemoryHistory(),
//     routes,
//   });
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: "/", 
      name: 'home',
      component: TrangChu 
    },
    { 
      path: "/dang-ki", 
      name: 'register',
      component: DangKi 
    },
    { 
      path: "/dang-nhap", 
      name: 'login',
      component: DangNhap 
    },
    { 
      path: "/lich-su", 
      name: 'history',
      component: LichSu 
    },
  ]
})
export default router