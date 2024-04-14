<template>
    <Master>
        <div class="mx-auto flex max-w-[1140px] flex-col gap-4 rounded-lg bg-white py-8 px-6">
            <h2 class="border-b border-white-f8 pb-4 text-[28px] text-[#006baa]">Cộng xu</h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div class="col-span-1">
                    <ul class="overflow-hidden rounded-md border">
                        <li><a aria-current="page"
                                class="flex cursor-pointer items-center justify-between gap-3 border px-4 py-2.5 text-sm border-brown-ad bg-brown-ad text-white"
                                href="/doi-mat-cong-xu">
                                <span class="text-brown-ad" style="color:white"><svg stroke="currentColor"
                                        fill="currentColor" stroke-width="0" viewBox="0 0 288 512" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg" >
                                        <path
                                            d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="flex-1">Cộng xu</span><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                    </path>
                                </svg></a></li>
                    </ul>
                </div>
                <div class="col-span-1 md:col-span-2">
                    <div class="rounded-md">
                        <h3 class="rounded-t-md border border-[#ddd] bg-[#f5f5f5] px-4 py-2.5 text-sm">Cộng xu</h3>
                        <div class="space-y-4 rounded-b-md border border-t-0 border-[#ddd] p-4">
                            <form class="flex flex-col gap-4">
                                <input
                                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9]  disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
                                    name="oldPassword" type="password" placeholder="Tên tài khoản" value="">
                                <input
                                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9]  disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
                                    name="newPassword" type="password" placeholder="Xu cộng thêm" value="">
                                <div>
                                    <button
                                        class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors inline bg-[#5bc0de] text-sm text-white hover:bg-[#39b3d7]"
                                        type="submit"><span class="flex-1 truncate">Cộng xu</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Master>
</template>

<script>
import Master from "../Master.vue";
export default {
    components: {
        Master
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log('doi mat khau ne', this.$route.fullPath);
    },

}
</script>
<style scoped>
.read-the-docs {
    color: #888;
}
</style>
