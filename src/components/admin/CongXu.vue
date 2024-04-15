<template>
    <Master>
        <div class="mx-auto flex max-w-[1140px] flex-col gap-4 rounded-lg bg-white py-8 px-6">
            <h2 class="border-b border-white-f8 pb-4 text-[28px] text-[#006baa]">Cộng xu</h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <AdminSideBar />
                <div class="col-span-1 md:col-span-2">
                    <div class="rounded-md">
                        <h3 class="rounded-t-md border border-[#ddd] bg-[#f5f5f5] px-4 py-2.5 text-sm">Cộng xu</h3>
                        <div class="space-y-4 rounded-b-md border border-t-0 border-[#ddd] p-4">
                            <input
                                class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9]  disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
                                name="oldPassword" type="text" placeholder="Tên tài khoản hoặc ID (nên dùng ID)" v-model="username">
                            <input
                                class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9]  disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
                                name="newPassword" type="text" placeholder="Xu cộng thêm" v-model="xu">
                            <div>
                                <button
                                    @click="addXu()"
                                    class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors inline bg-[#5bc0de] text-sm text-white hover:bg-[#39b3d7]"
                                    type="submit">
                                    <span class="flex-1 truncate">Cộng xu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Master>
</template>

<script>
import Master from "../Master.vue";
import AdminSideBar from "./layouts/AdminSideBar.vue";
import axios from "axios"
const API_URL = import.meta.env.VITE_WEB_API;
export default {
    components: {
        Master,
        AdminSideBar
    },
    data() {
        return {
            username : null,
            xu : 0,
            token : window.localStorage.getItem('token'),
        }
    },
    mounted() {
        console.log('doi mat khau ne', this.$route.fullPath);
    },
    methods : {
        async addXu() {

            let user = {
                username : this.username,
                xu : this.xu,
            }
            const data = await axios.post(API_URL + `/auth/cong-xu`, user, {
            headers: {
                'Authorization': `Basic ${this.token}` 
            }
            }).then(rs => {
                console.log('rs', rs);
                
                return rs.data;
            });
        },
    }

}
</script>
<style scoped>
.read-the-docs {
    color: #888;
}
</style>
