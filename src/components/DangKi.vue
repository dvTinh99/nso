<template>
  <div
    class="mx-auto flex max-w-screen-md flex-col justify-center space-y-4 rounded-lg bg-white py-8 px-10"
  >
    <h2 class="border-b border-white-f8 text-center text-[28px] text-[#006baa]">
      Đăng ký tài khoản
    </h2>
      <div class="w-full text-center">
        <input
        v-model="username"
          class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
          name="username"
          type="text"
          placeholder="Tên tài khoản"
          value=""
        />
      </div>
      <div class="w-full text-center">
        <input
        v-model="nickname"
          class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
          name="full_name"
          type="text"
          placeholder="Tên hiển thị"
          value=""
        />
      </div>
      <div class="relative w-full text-center">
        <input
        v-model="secretCode"
          class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
          name="secretCode"
          type="number"
          placeholder="Mã bí mật"
          min="1"
          max="999999"
          value=""
        />
        <div
          class="has-tooltip absolute top-0 right-2 translate-y-1/2 cursor-pointer"
        >
          <span
            class="text-[14px] tooltip -top-20 block w-80 -translate-x-80 rounded bg-gray-100 p-1 text-red-500 shadow-lg lg:-translate-x-1/2"
            >Mã số bí mật được dùng để cấp lại thông tin tài khoản web. Lưu ý:
            tự bảo quản mã số bí mật tránh để lộ thông tin. Mã số bí mật phải từ
            6 đến 12 ký tự số</span
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            class="text-[#777777]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="w-full text-center">
        <input
        v-model="password"
          class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
          name="password"
          type="password"
          placeholder="Mật khẩu"
          value=""
        />
      </div>
      <div class="w-full text-center">
        <input
        v-model="rePassword"
          class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
          name="retypePassword"
          type="password"
          placeholder="Xác nhận mật khẩu"
          value=""
        />
      </div>
      <button
      @click="register"
        class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-[#5bc0de] text-sm text-white"
        type="button"
      >
        <span class="flex-1 truncate">Tạo tài khoản</span>
      </button>
    <p class="p-8 text-center text-sm">--- hoặc ---</p>
    <div class="flex justify-center gap-1">
      <a href="/dang-nhap"
        ><button
          class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-[#d9534f] text-sm text-white"
        >
          <span class="flex-1 truncate">Đăng nhập</span>
        </button></a
      ><button
        class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-[#f0ad4e] text-sm text-white"
      >
        <span class="flex-1 truncate">Quên mật khẩu?</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        username : '',
        nickname : '',
        password : '',
        rePassword: '',
        secretCode : '',
    };
  },
  async mounted() {
  },
  methods : {
    async register() {
        let params = {
            username: this.username,
            nickname: this.nickname,
            secretCode: this.secretCode,
            password: this.password,
        };
        await this.$store.dispatch("auth/register", params);
    }
  },
  watch : {
    rePassword : function(newVal, oldVal) {
        // check repass
        console.log('new', newVal);
        
    }
  }
};
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
