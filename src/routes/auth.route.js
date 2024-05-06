import { createWebHistory, createRouter } from 'vue-router'

import TrangChu from '../components/TrangChu.vue';
import DangKi from '../components/DangKi.vue';
import DangNhap from '../components/DangNhap.vue';
import LichSu from '../components/LichSu.vue';
import ThongTinCaNhan from '../components/logged/ThongTinCaNhan.vue';
import NapXu from '../components/logged/NapXu.vue';
import RutXu from '../components/logged/RutXu.vue';
import BienDongSoDu from '../components/logged/BienDongSoDu.vue';
import DoiMatKhau from '../components/logged/DoiMatKhau.vue';
import CongXu from '../components/admin/CongXu.vue';
import ListUser from '../components/admin/ListUser.vue';

import store from '../stores'
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
    { 
      path: "/thong-tin-ca-nhan", 
      name: 'thong tin ca nhan',
      component: ThongTinCaNhan,
      meta: { requiresAuth: true }, 
    },
    { 
      path: "/nap-xu", 
      name: 'nap-xu',
      component: NapXu,
      meta: { requiresAuth: true }, 
    },
    { 
      path: "/rut-xu", 
      name: 'rut-xu',
      component: RutXu,
      meta: { requiresAuth: true }, 
    },
    { 
      path: "/bien-dong-so-du", 
      name: 'bien-dong-so-du',
      component: BienDongSoDu,
      meta: { requiresAuth: true }, 
    },
    { 
      path: "/doi-mat-khau", 
      name: 'doi-mat-khau',
      component: DoiMatKhau,
      meta: { requiresAuth: true }, 
    },
    { 
      path: "/cong-xu", 
      name: 'cong-xu',
      component: CongXu ,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    { 
      path: "/danh-sach-user", 
      name: 'danh-sach-user',
      component: ListUser ,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
  ]
})



export default router