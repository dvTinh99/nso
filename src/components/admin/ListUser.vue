<template>
    <Master>
        <div class="mx-auto flex max-w-[1140px] flex-col gap-4 rounded-lg bg-white py-8 px-6">
            <h2 class="border-b border-white-f8 pb-4 text-[28px] text-[#006baa]">Biến động</h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <AdminSideBar />
                <div class="relative col-span-1 space-y-4 md:col-span-2">
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse text-[13px]">
                            <thead>
                                <tr class="bg-[#f3f3f3] text-[#444]">
                                    <th class="border border-r border-gray-200 p-2 text-left">ID</th>
                                    <th class="border border-r border-gray-200 p-2 text-left">User Name</th>
                                    <th class="border border-r border-gray-200 p-2 text-left">Nick Name</th>
                                    <th class="border border-r border-gray-200 p-2 text-left">Xu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-[#FFFFFF] text-[#444]" v-for="user in users">
                                    <th class="border border-r border-gray-200 p-2 text-left">{{ user.id }}</th>
                                    <th class="border border-r border-gray-200 p-2 text-left">{{ user.username }}</th>
                                    <th class="border border-r border-gray-200 p-2 text-left">{{ user.nickname }}</th>
                                    <th class="border border-r border-gray-200 p-2 text-left">{{ user.xu }}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-end"></div>
                </div>
            </div>
        </div>
    </Master>
</template>

<script>
import Master from "../Master.vue";
import AdminSideBar from "./layouts/AdminSideBar.vue"
import axios from "axios"
const API_URL = import.meta.env.VITE_WEB_API;
export default {
    components: {
        Master,
        AdminSideBar
    },
    data() {
        return {
            users : [],
            token : window.localStorage.getItem('token'),
        }
    },
    mounted() {
        this.fetchUsers();
    },
    methods : {
        async fetchUsers() {
            const data = await axios.get(API_URL + `/auth/users`, {
                headers: {
                    'Authorization': `Basic ${this.token}` 
                }
            }).then(rs => rs.data);
        
            this.users = data.users
        }
    },

}
</script>
<style scoped>
.read-the-docs {
    color: #888;
}
</style>
