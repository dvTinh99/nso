<template>
  <Master>
    <div
      class="mx-auto flex max-w-screen-md flex-col justify-center space-y-4 rounded-lg bg-white py-8 px-10"
    >
      <h2
        class="border-b border-white-f8 text-center text-[28px] text-[#006baa]"
      >
        Đăng nhập
      </h2>
      <div class="flex flex-col items-center gap-4 text-sm">
        <input
          class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
          name="username"
          type="text"
          placeholder="Tên tài khoản"
          value=""
          v-model="username"
        /><input
          class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
          name="password"
          type="password"
          placeholder="Mật khẩu"
          value=""
          v-model="password"
        />
        <div class="text-center">
          <input
            type="checkbox"
            id="remember"
            class="mr-2 cursor-pointer"
          /><label for="remember" class="cursor-pointer"
            >Ghi nhớ tài khoản</label
          >
        </div>
        <button
          class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-[#5bc0de] text-sm text-white hover:bg-[#39b3d7]"
        >
          <span class="flex-1 truncate" @click="login">Đăng nhập</span>
        </button>
      </div>
      <p class="p-8 text-center text-sm">--- hoặc ---</p>
      <div class="flex justify-center gap-1">
        <a href="/dang-ki"
          ><button
            class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-[#d9534f] text-sm text-white hover:bg-[#d2322d]"
          >
            <span class="flex-1 truncate">Tạo tài khoản</span>
          </button></a
        ><button
          class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-[#f0ad4e] text-sm text-white hover:bg-[#ed9c28]"
        >
          <span class="flex-1 truncate">Quên mật khẩu?</span>
        </button>
      </div>
    </div>
  </Master>
</template>

<script>
import Master from "./Master.vue";
import { mapState } from "vuex";
export default {
  components: {
    Master,
  },
  computed : mapState({
    isAdmin : state => state.auth.isAdmin,
  }),
  data() {
    return {
        username : "",
        password : "",
    };
  },
  methods : {
    async login() {
        let params = {
            username: this.username,
            password: this.password,
        };
        await this.$store.dispatch("auth/login", params);
        this.$router.push({ path: '/' });

    },
  }
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
