<script setup>
</script>

<template>
    <div class="mx-auto flex max-w-[1140px] flex-col gap-4 rounded-lg bg-white py-8 px-6">
        <h2 class="border-b border-white-f8 pb-4 text-[28px] text-[#006baa]">Lịch sử</h2>
        <form class="grid gap-x-6 gap-y-4 md:grid-cols-4">
            <div><input
                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9]  disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
                    name="id" placeholder="Mã phiên" value=""></div>
            <div><input
                    class="input-shadow rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9]  disabled:cursor-not-allowed disabled:bg-gray-100 w-full"
                    name="name" placeholder="Tên người chơi" value=""></div>
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
        <p class="text-[15px]">Hiển thị 15 kết quả trên tổng số 39618</p>
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
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
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
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39614</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">72,332</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">103,532,149</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">28</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#f0ad4e]">CUNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5cb85c]">TIÊU</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#333333]">TRỐNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#7400bd]">8</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:51:05</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:54:24</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=c04dd51696a2ed9b92ce37b2ec18ed54" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39613</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">30,833</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">833,607,321</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">33</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5bc0de]">ĐAO</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f]">KIẾM</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#333333]">TRỐNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f]">3</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:48:18</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:51:05</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=677133aa06000cc71f186e47105d4457" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39612</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">57,433</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">830,416,892</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">41</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5bc0de]">ĐAO</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f]">KIẾM</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#333333]">TRỐNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5bc0de]">1</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:45:42</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:48:18</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=eecc651174f283089b0c793994d8aadc" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39611</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">92,830</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">442,443,245</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">32</td>
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
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5cb85c]">2</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:42:50</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:45:42</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=861eb478e85d3fbea12cbb045868f55f" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39610</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">38,172</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">722,214,836</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">35</td>
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
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#67617d]">5</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:40:20</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:42:50</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=60eb211b70e027658c2fca10f8dbf44d" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39609</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">53,346</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">638,794,244</td>
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
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:38:07</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:40:20</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=df82147bb9600152166f9f18ea105003" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39608</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">83,673</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">128,728,420</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">34</td>
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
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#3705fc]">4</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:32:59</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:38:07</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=59fbd4f19ff39222f7656ac585f65c17" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39607</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">55,546</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">170,178,953</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">41</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5bc0de]">ĐAO</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f]">KIẾM</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#333333]">TRỐNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5bc0de]">1</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:30:30</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:32:59</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=b22276b200c5e2185599db1ba5953116" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39606</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">59,962</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">550,169,962</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">43</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5bc0de]">ĐAO</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f]">KIẾM</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#333333]">TRỐNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f]">3</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:28:10</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:30:30</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=b211fb856cfed39febf2386eba6b8e46" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39605</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">86,684</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">970,380,422</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">35</td>
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
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#67617d]">5</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:25:32</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:28:10</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=25da73abc0a982cd6136b63e7e624c99" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39604</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">54,221</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">350,920,153</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">28</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#f0ad4e]">CUNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5cb85c]">TIÊU</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#333333]">TRỐNG</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#7400bd]">8</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:23:09</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:25:32</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=8c5ec6713b8d808d48c3c0330a3ce2c3" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                    </path>
                                </svg>Xem</a></td>
                    </tr>
                    <tr class="odd:bg-white-f8">
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">#39603</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><span
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-orange-400 uppercase">Kunai</span>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">46,618</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">900,854,367</td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm">42</td>
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
                                class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#5cb85c]">2</span>
                        </td>
                        <td class="bor0er-r whitespace-nowrap border-gray-100 py-1 px-4 text-sm">
                            <p><strong class="inline-block w-16">Bắt đầu:</strong> <span>26-03-2024 13:20:54</span></p>
                            <p><strong class="inline-block w-16">Kết thúc:</strong> <span>26-03-2024 13:23:09</span></p>
                        </td>
                        <td class="border border-gray-200 py-1 px-4 text-center text-sm"><a
                                class="flex items-center whitespace-nowrap rounded-sm border border-sky-500 bg-sky-400 py-0.5 px-2.5 text-sm text-white hover:bg-sky-500"
                                href="/?view-key=9e12e26d427a5204bff671b55973a9c3" target="_blank"><svg
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
                <li><a rel="next" role="button"
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" aria-label="Page 2">2</a></li>
                <li><a role="button"
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" aria-label="Page 3">3</a></li>
                <li><a role="button"
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" aria-label="Page 4">4</a></li>
                <li><a role="button"
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" aria-label="Page 5">5</a></li>
                <li class="break"><a
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        role="button" tabindex="0" aria-label="Jump forward">...</a></li>
                <li><a role="button"
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" aria-label="Page 2640">2640</a></li>
                <li><a role="button"
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" aria-label="Page 2641">2641</a></li>
                <li><a role="button"
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" aria-label="Page 2642">2642</a></li>
                <li class="next"><a
                        class="border h-8 w-8 flex items-center justify-center text-sm select-none hover:bg-gray-200 cursor-pointer"
                        tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">&gt;</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
