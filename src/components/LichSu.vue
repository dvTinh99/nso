<template>
    <Master>
    <div class="mx-auto flex max-w-[1140px] flex-col gap-4 rounded-lg bg-white py-8 px-6">
        <h2 class="border-b border-white-f8 pb-4 text-[28px] text-[#006baa]">Lịch sử</h2>
        <form class="grid gap-x-6 gap-y-4 md:grid-cols-4">
            <div><input
                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9]  disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
                    name="id" placeholder="Mã phiên" value=""></div>
            <div><input
                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9]  disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
                    name="name" placeholder="Tên người chơi" value="kocain"></div>
            <div><select
                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] w-full"
                    name="id_server">
                    <option value=""> -- Chọn máy chủ -- </option>
                    <option value="4">Kunai</option>
                </select></div>
            <div><select
                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] w-full"
                    name="result">
                    <option value=""> -- Lựa chọn -- </option>
                    <option value="0">Cung</option>
                    <option value="1">Đao</option>
                    <option value="2">Tiêu</option>
                    <option value="3">Kiếm</option>
                    <option value="4">Kunai</option>
                    <option value="5">Quạt</option>
                    <option value="6">Trống</option>
                </select></div>
            <div><select
                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] w-full"
                    name="last_num">
                    <option value=""> -- Số cuối -- </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select></div>
            <div>
                <div class="react-datepicker-wrapper w-full">
                    <div class="react-datepicker__input-container"><input type="text" placeholder="Khoảng bắt đầu"
                            class="h-[30px] w-full rounded-sm border border-solid border-gray-400 py-1 px-2 outline-none"
                            value=""></div>
                </div>
            </div>
            <div>
                <div class="react-datepicker-wrapper w-full">
                    <div class="react-datepicker__input-container"><input type="text" placeholder="Khoảng kết thúc"
                            class="h-[30px] w-full rounded-sm border border-solid border-gray-400 py-1 px-2 outline-none"
                            value=""></div>
                </div>
            </div>
            <div class="flex gap-1"><button
                    class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-blue-500 px-6 text-sm text-white hover:bg-blue-600"
                    type="submit"><span class="flex-1 truncate">Tìm kiếm</span></button><button
                    class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-red-500 px-6 text-sm text-white hover:bg-red-600"
                    type="button"><span class="flex-1 truncate">Tất cả</span></button></div>
        </form>
        <p class="text-[15px]">Hiển thị 3 kết quả trên tổng số 3</p>
        <div class="overflow-x-auto">
            <table class="border-collapse md:w-full">
                <thead>
                    <tr class="bg-[#f3f3f3] text-black">
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">#</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">Máy chủ</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">Đặt</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">Tổng</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">Kết quả cộng</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">CĐ</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">TK</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">UQ</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">SC</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">Thời gian</th>
                        <th class="border border-r border-gray-200 py-3 px-2 text-center text-sm">Xem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39617</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">
                                <span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">
                                Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">66,228</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">951,763,341</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">39</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5bc0de]">ĐAO</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5cb85c]">TIÊU</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#67617d]">QUẠT</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#b8a500]">9</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 14:02:56</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 14:05:50</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=f4159f4cbdada3e6cf6ebe93b0ae4b98" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39616</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">69,334</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">151,168,080</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">30</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#f0ad4e]">CUNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f]">KIẾM</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#3705fc]">KUNAI</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#f0ad4e]">0</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:59:04</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 14:02:56</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=3c4d78d9fa482027c1d5e9758e044e87" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39615</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">89,873</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">447,069,656</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">47</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5bc0de]">ĐAO</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5cb85c]">TIÊU</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#67617d]">QUẠT</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#00b093]">7</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:54:24</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:59:04</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=ec133e011d59115f6ec97c5888b570fe" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <ul class="flex" role="navigation" aria-label="Pagination">
                <li class="previous cursor-not-allowed"><a
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer cursor-not-allowed"
                        tabindex="-1" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">&lt;</a>
                </li>
                <li class="bg-orange-400 border-0 text-white"><a rel="canonical" role="button"
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a></li>
                <li class="next">
                        <a
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">&gt;</a></li>
            </ul>
        </div>
    </div>
</Master>
</template>

<script>
import Master from "./Master.vue";
export default {
    components: {
        Master
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log('lich su ne', this.$route.fullPath);
    },

}
</script>
<style scoped>
.read-the-docs {
    color: #888;
}
</style>
