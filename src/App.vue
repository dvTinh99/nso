

<template>
  <div class="bg-gray-e6">
   <header class="bg-brown-6b">
      <div class="mx-auto flex h-full max-w-[1140px] items-center justify-between">
         <a href="/"><img class="h-16" src="/dctk-rm.png" alt="" width="67px"></a>
         <div class="hidden md:flex">
            <a @click="changePage('/dang-nhap')">
               <button class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors text-white">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
                  </svg>
                  <span class="flex-1 truncate"><span class="text-[13px]">Đăng nhập</span></span>
               </button>
            </a>
            <a @click="changePage('/dang-ki')">
               <button class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors text-white">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <span class="flex-1 truncate"><span class="text-[13px]">Đăng ký</span></span>
               </button>
            </a>
         </div>
         <button class="h-[60px] px-4 text-white md:hidden">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
         </button>
      </div>
      <div class="h-0 overflow-hidden border-t border-t-[#7c4427] bg-brown-6b transition-all md:hidden">
         <ul>
            <li>
               <a aria-current="page" class="flex h-10 w-full items-center gap-2 py-2.5 px-4 text-sm text-white bg-black" @click="changePage('/')">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-[13px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </svg>
                  Trang chủ
               </a>
            </li>
            <li>
               <a class="flex h-10 w-full items-center gap-2 py-2.5 px-4 text-sm text-white" @click="changePage('/dang-nhap')">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[13px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
                  </svg>
                  Đăng nhập
               </a>
            </li>
            <li>
               <a class="flex h-10 w-full items-center gap-2 py-2.5 px-4 text-sm text-white" @click="changePage('/dang-ki')">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-[13px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  Đăng ký
               </a>
            </li>
            <li>
               <a class="flex h-10 w-full items-center gap-2 py-2.5 px-4 text-sm text-white" @click="changePage('/lick-su')">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[13px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"></path>
                  </svg>
                  Lịch sử
               </a>
            </li>
         </ul>
      </div>
   </header>
   <nav class="mainbar hidden h-[170px] border-b-[10px] border-white bg-orange-e2 md:block">
      <div class="mx-auto max-w-[1140px] pt-4">
         <ul class="flex gap-3">
            <li>
               <a class="relative flex h-20 cursor-pointer flex-col items-center justify-center rounded border-2 px-5 py-[14px] text-white" :class="[ isHome ? classSelected : classNotSelected ]" @click="changePage('/')">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-[28px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </svg>
                  <span class="mt-1 text-sm">Trang chủ</span>
               </a>
            </li>
            <li>
               <a aria-current="page" class="relative flex h-20 cursor-pointer flex-col items-center justify-center rounded border-2 px-5 py-[14px] text-white" :class="[ isLogin ? classSelected : classNotSelected ]" @click="changePage('/dang-nhap')">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[28px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
                  </svg>
                  <span class="mt-1 text-sm">Đăng nhập</span>
               </a>
            </li>
            <li>
               <a class="relative flex h-20 cursor-pointer flex-col items-center justify-center rounded border-2 px-5 py-[14px] text-white" :class="[ isRegister ? classSelected : classNotSelected ]" @click="changePage('/dang-ki')">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-[28px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <span class="mt-1 text-sm">Đăng ký</span>
               </a>
            </li>
            <li>
               <a class="relative flex h-20 cursor-pointer flex-col items-center justify-center rounded border-2 px-5 py-[14px] text-white" :class="[ isHistory ? classSelected : classNotSelected ]" @click="changePage('/lich-su')">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[28px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"></path>
                  </svg>
                  <span class="mt-1 text-sm">Lịch sử</span>
               </a>
            </li>
         </ul>
      </div>
   </nav>
   <div class="min-h-[calc(100vh-340px)] border-b-[10px] border-orange-e2 pb-20 md:-mt-[50px]">
      <TrangChu v-if="isHome"/>
      <DangNhap v-if="isLogin"/>
      <DangKi v-if="isRegister"/>
      <LichSu v-if="isHistory"/>
   </div>
   <footer class="bg-brown-6b">
      <div class="mx-auto h-40 max-w-screen-xl">
         <p class="py-6 text-xs text-white">Copyright 2024 © DCTK.WIN | All rights reserved</p>
      </div>
   </footer>
</div>
</template>
<script>
import TrangChu from './components/TrangChu.vue'
import DangNhap from './components/DangNhap.vue'
import DangKi from './components/DangKi.vue'
import LichSu from './components/LichSu.vue'
export default {
   components : {
      TrangChu,
      DangNhap,
      DangKi,
      LichSu
    },
    data() {
      return {
        isHome:true,
        isLogin:false,
        isRegister:false,
        isHistory:false,
        classSelected : "border-brown-ad bg-brown-ad",
        classNotSelected : "border-orange-cc bg-orange-d5",

      }
    },
    mounted() {

      this.isLogin = this.$store.state.auth.isLogin;
    },
    methods : {
      changePage(path) {
         switch (path) {
            case '/dang-nhap' : {
               this.isLogin = true;
               this.isHome = false;
               this.isRegister = false;
               this.isHistory = false;

               break;
            }
            case '/dang-ki' : {
               this.isLogin = false;
               this.isHome = false;
               this.isRegister = true;
               this.isHistory = false;
               break;
            }
            case '/lich-su' : {
               this.isLogin = false;
               this.isHome = false;
               this.isRegister = false;
               this.isHistory = true;
               break;
            }
            default : {
               this.isLogin = false;
               this.isHome = true;
               this.isRegister = false;
               this.isHistory = false;
               break;
            }
         }
      },
    }
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
