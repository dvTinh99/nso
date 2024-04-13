<template>
   <Master>
      <div class="mx-auto flex max-w-[1140px] flex-col gap-4 rounded-lg bg-white py-8 px-6">
         <div class="gap-15 mb-4 flex flex-col items-center gap-12">
            <span class="index-module_type__E-SaG text-xl md:text-2xl text-black whitespace-nowrap overflow-hidden">Hệ
               thống web Ninja School Online tự động</span>
            <div class="flex gap-4">
               <button @click="sendMessage"
                  class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-[#5bc0de] text-white hover:bg-[#39b3d7]">
                  <span class="flex-1 truncate" @click="() => {showHuongDan = !showHuongDan}">Xem hướng dẫn</span>
               </button>
               <a target="_blank" rel="noreferrer" href="https://zalo.me/g/xhypsj216">
                  <button
                     class="flex items-center gap-2 rounded-[.25em] py-1.5 px-4 outline-none transition-colors bg-[#5cb85c] text-white hover:bg-[#47a447]">
                     <span class="flex-1 truncate">NHÓM ZALO</span>
                  </button>
               </a>
            </div>
         </div>
         <div class="flex flex-col">
            <div class="inline-flex justify-center">
               <div class="flex flex-wrap gap-x-[-2px] overflow-hidden rounded">
                  <button
                     class="inline-block border border-gray-cc bg-white px-4 py-2 text-lg outline-none transition-colors first:rounded-l last:rounded-r bg-orange-e2 text-white hover:bg-brown-ad">
                     Kunai
                  </button>
               </div>
            </div>
            <div class="mt-3 grid grid-cols-2 gap-8">
               <div class="col-span-2 lg:col-span-1">
                  <div class="overflow-hidden rounded border border-brown-6b">
                     <h3 class="flex-auto bg-brown-ad py-2 text-center text-sm text-white">
                        VXMM
                     </h3>
                     <div class="p-4 text-sm">
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Mã VXMM: </strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <span class="text-[#333333]">#39599</span>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Thời gian:</strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <span class="text-[#333333]">{{ second }}</span>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Ván này:</strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <span class="font-semibold text-red-600">{{ numberWithCommas(xuThisGame) }}</span>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Ván trước:</strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <span class="text-[#333333]">{{ numberWithCommas(xuPreviousGame) }}</span>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Số tỉ lệ %:</strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <span class="text-[#333333]">3.7293%</span>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Số người chơi:</strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <span class="text-[#333333]">18</span>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Số ngẫu nhiên:</strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <div class="flex items-center justify-center gap-1">
                                 <template v-if="!showRandom">
                                    <svg aria-hidden="true"
                                       class="me-2 h-4 w-4 animate-spin fill-black text-gray-200 dark:text-gray-600"
                                       viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                          fill="currentColor"></path>
                                       <path
                                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                          fill="currentFill"></path>
                                    </svg>
                                    <span>(hiển thị ở giây 15)</span>
                                 </template>
                                 <template v-if="showRandom">
                                    {{ random }}
                                 </template>
                              </div>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Tổng: </strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <span class="text-[#333333]">{{ splitRandom }}={{ sumSplitRandom }}</span>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Kết quả cộng:</strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <span class="text-[#333333]">{{
                  numberWithCommas(resultSum)
               }}</span>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">Kết quả:</strong>
                           </div>
                           <div class="col-span-2 text-center">
                              <div class="flex justify-center gap-3">
                                 <span
                                    class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white"
                                    :class="{
                  'bg-[#5bc0de]': item == 'ĐAO',
                  'bg-[#f0ad4e]': item == 'CUNG',
                  'bg-[#d9534f]': item == 'KIẾM',
                  'bg-[#3705fc]': item == 'KUNAI',
                  'bg-[#5cb85c]': item == 'TIÊU',
                  'bg-[#67617d]': item == 'QUẠT',
                  'bg-[#333333]': item == '',
               }" v-for="item in arrayResult[lastNumber]">{{ item }}</span>
                                 <span
                                    class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white"
                                    :class="[arrayColorSC[lastNumber]]">{{ lastNumber }}</span>
                              </div>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">CĐ:</strong>
                           </div>
                           <div class="col-span-2">
                              <div class="flex justify-center gap-1">
                                 <span v-for="item in historyLastNumber"
                                    class="inline-block h-5 w-5 rounded-full text-center text-xs leading-5 text-white"
                                    :class="{
                  'bg-[#f0ad4e]': CDResult[item] == 'C',
                  'bg-[#5bc0de]': CDResult[item] == 'Đ',
               }">{{ CDResult[item] }}</span>
                              </div>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">TK:</strong>
                           </div>
                           <div class="col-span-2">
                              <div class="flex justify-center gap-1">
                                 <span v-for="item in historyLastNumber"
                                    class="inline-block h-5 w-5 rounded-full text-center text-xs leading-5 text-white"
                                    :class="{
                  'bg-[#5cb85c]': TKResult[item] == 'T',
                  'bg-[#d9534f]': TKResult[item] == 'K',
               }">{{ TKResult[item] }}</span>
                              </div>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 border-b border-gray-cc py-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">UQ:</strong>
                           </div>
                           <div class="col-span-2">
                              <div class="flex justify-center gap-1">
                                 <span
                                    class="inline-block h-5 w-5 rounded-full text-center text-xs leading-5 text-white"
                                    v-for="item in historyLastNumber" :class="{
                  'bg-[#67617d]': UQResult[item] == 'Q',
                  'bg-[#3705fc]': UQResult[item] == 'U',
                  'bg-[#333333]': UQResult[item] == '',
               }">{{ UQResult[item] }}</span>
                              </div>
                           </div>
                        </div>
                        <div class="grid grid-cols-3 pt-1">
                           <div class="col-span-1">
                              <strong class="text-[#333333]">SC:</strong>
                           </div>
                           <div class="col-span-2">
                              <div class="flex justify-center gap-1">
                                 <span
                                    class="inline-block h-5 w-5 rounded-full text-center text-xs leading-5 text-white"
                                    :class="[arrayColorSC[item]]" v-for="item in historyLastNumber">
                                    {{ item }}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-span-2 overflow-hidden rounded border border-brown-6b lg:col-span-1">
                  <div class="grid grid-cols-2 bg-brown-ad py-2 text-sm text-white">
                     <div class="col-span-1 text-center">
                        <p>THAM GIA</p>
                        <p>3,500,000</p>
                     </div>
                  </div>
                  <div class="p-4">
                     <div class="flex flex-col items-center rounded border border-[#ebccd1] bg-[#f2dede] p-2">
                        <p class="pb-1 text-sm text-[#a94442]">
                           Hãy đăng nhập để tham gia nhé
                        </p>
                        <a href="/dang-nhap">
                           <button class="rounded-[.25em] bg-[#d9534f] py-0.5 px-1 text-sm text-white">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                 class="mr-1 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                                 <path
                                    d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z">
                                 </path>
                              </svg>
                              <span class="text-[13px]">Đăng nhập</span>
                           </button>
                        </a>
                     </div>
                  </div>
                  <div class="p-4 pt-0">
                     <div class="relative mb-4">
                        <input type="text" placeholder="Tham gia"
                           class="h-8 w-full appearance-none rounded-md border border-gray-400 px-4 shadow outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                           disabled="" value="" />
                     </div>
                     <div class="grid grid-cols-3 gap-8 text-sm">
                        <button
                           class="rounded-xl bg-[#f0ad4e] px-4 py-3 font-semibold uppercase text-white hover:opacity-70 disabled:cursor-not-allowed"
                           disabled="">
                           Cung</button><button
                           class="rounded-xl bg-[#5cb85c] px-4 py-3 font-semibold uppercase text-white hover:opacity-70 disabled:cursor-not-allowed"
                           disabled="">
                           Tiêu</button><button
                           class="rounded-xl bg-[#3705fc] px-4 py-3 font-semibold uppercase text-white hover:opacity-70 disabled:cursor-not-allowed"
                           disabled="">
                           Kunai</button><button
                           class="rounded-xl bg-[#5bc0de] px-4 py-3 font-semibold uppercase text-white hover:opacity-70 disabled:cursor-not-allowed"
                           disabled="">
                           Đao</button><button
                           class="rounded-xl bg-[#d9534f] px-4 py-3 font-semibold uppercase text-white hover:opacity-70 disabled:cursor-not-allowed"
                           disabled="">
                           Kiếm</button><button
                           class="rounded-xl bg-[#67617d] px-4 py-3 font-semibold uppercase text-white hover:opacity-70 disabled:cursor-not-allowed"
                           disabled="">
                           Quạt
                        </button>
                        <div class="col-span-2 flex items-center">
                           <input
                              class="h-8 w-full appearance-none rounded-md border border-gray-400 px-4 shadow outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                              type="text" placeholder="Chọn số từ 0 đến 9" disabled="" min="0" max="9" value="" />
                        </div>
                        <button
                           class="rounded-xl bg-violet px-4 py-3 font-semibold uppercase text-white hover:opacity-70 disabled:cursor-not-allowed"
                           disabled="">
                           Số cuối
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <h3 class="mb-6 text-center text-2xl text-[#333333]">
               LỊCH SỬ THAM GIA
            </h3>
            <div class="text-sm marquee-container" style="--pause-on-hover: running; --pause-on-click: running">
               <div class="marquee" aria-hidden="true" style="
              --play: running;
              --direction: normal;
              --duration: 19.79453125s;
              --delay: 0s;
              --iteration-count: infinite;
            ">
                  <div class="ql-container ql-snow" style="border: none">
                     <div class="ql-editor">
                        <h2 class="ql-align-center">
                           <strong class="ql-font-Mulish" style="
                      background-color: rgb(255, 255, 102);
                      color: rgb(230, 0, 0);
                    ">Tất cả giá trị xu đều = 0 VNĐ. Web sử dụng cho mục đích
                              giải trí và chỉ cho phép chơi = Xu trong Game NSO của công
                              ty TeaMobi</strong>
                        </h2>
                        <h2 class="ql-align-center">
                           <strong class="ql-font-Mulish" style="
                      background-color: rgb(255, 255, 102);
                      color: rgb(230, 0, 0);
                    ">Web cam kết không sử dụng và nói không với mọi hình thức
                              Thanh Toán liên quan đến Thẻ Cào, ATM, Ví, vv...</strong>
                        </h2>
                     </div>
                  </div>
               </div>
            </div>
            <div class="relative overflow-x-auto">
               <table class="border-gray-80 w-auto border-l text-left md:w-full">
                  <thead>
                     <tr class="bg-[#ad4105] text-white">
                        <th scope="col" class="w-auto border-r border-gray-200 py-1 text-center text-sm">
                           Máy chủ
                        </th>
                        <th scope="col" class="w-auto border-r border-gray-200 py-1 text-center text-sm">
                           Nhân vật
                        </th>
                        <th scope="col" class="w-auto border-r border-gray-200 py-1 text-center text-sm">
                           Tham gia
                        </th>
                        <th scope="col" class="w-auto border-r border-gray-200 py-1 text-center text-sm">
                           Chọn
                        </th>
                        <th scope="col" class="w-auto border-r border-gray-200 py-1 text-center text-sm">
                           Trạng thái
                        </th>
                        <th scope="col" class="w-auto border-r border-gray-200 py-1 text-center text-sm">
                           Nhận
                        </th>
                        <th scope="col" class="w-auto border-r border-gray-200 py-1 text-center text-sm">
                           Thời gian
                        </th>
                     </tr>
                  </thead>
                  <tbody></tbody>
               </table>
            </div>
            <div class="mt-2 flex flex-col items-center justify-end gap-4 md:flex-row">
               <p>Hiển thị:</p>
               <div class="flex gap-4">
                  <select
                     class="rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 md:w-[200px]">
                     <option value="0">Tất cả</option>
                     <option value="1">Theo máy chủ</option>
                  </select>
                  <select
                     class="rounded border border-solid border-gray-400 py-1 px-2 text-[15px] text-[#333333] outline-none focus:border-[#66afe9] disabled:cursor-not-allowed disabled:bg-gray-100 md:w-[200px]">
                     <option value="5">5 bản ghi</option>
                     <option value="10">10 bản ghi</option>
                     <option value="15">15 bản ghi</option>
                     <option value="20">20 bản ghi</option>
                     <option value="25">25 bản ghi</option>
                     <option value="30">30 bản ghi</option>
                  </select>
               </div>
            </div>
         </div>
         <div class="flex flex-col">
            <h3 class="mb-6 text-center text-2xl text-[#333333]">
               BOT CHƠI TRONG GAME
            </h3>
            <div class="flex justify-center">
               <div class="flex flex-wrap gap-[-2px] overflow-hidden rounded">
                  <button
                     class="inline-block border border-gray-cc bg-white px-4 py-2 text-lg outline-none transition-colors first:rounded-l last:rounded-r bg-orange-e2 text-white hover:bg-brown-ad">
                     Kunai
                  </button>
               </div>
            </div>
            <table class="mt-4 w-full table-auto text-left">
               <thead>
                  <tr class="bg-[#ad4105] text-white">
                     <th class="border-gray border-r py-1 text-center text-[13px]">
                        Tên nhân vật
                     </th>
                     <th class="border-gray border-r py-1 text-center text-[13px]">
                        Vị Trí
                     </th>
                     <th class="border-gray border-r py-1 text-center text-[13px]">
                        Trạng thái
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite2
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Trường Ookaza 11
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite3
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Trường Ookaza 12
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite4
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Trường Ookaza 13
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite5
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Đồi Fumimen 15
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite6
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Đồi Fumimen 16
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite7
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Đồi Fumimen 17
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite8
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Đồi Fumimen 18
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite11
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Đồi Fumimen 22
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite13
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Đồi Fumimen 23
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite14
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Trường Hirosaki 13
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite15
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Trường Hirosaki 14
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite16
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Trường Hirosaki 15
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite17
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Trường Hirosaki 16
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
                  <tr class="odd:bg-white-f8">
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        dctksite12
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-sm">
                        Trường Hirosaki 17
                     </td>
                     <td class="border-r border-gray-100 py-1 text-center text-[13px]">
                        <span
                           class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-green-500">ONLINE</span>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div class="rounded-[4px] border border-[#ebccd1]">
            <div class="rounded-tl-[3px] rounded-tr-[3px] border-b border-[#ebccd1] bg-[#f2dede] py-3">
               <h2 class="text-center text-[18px] text-[#a94442]">THÔNG BÁO</h2>
            </div>
            <div>
               <div class="ql-container ql-snow" style="border: none">
                  <div class="ql-editor">
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)">HỆ THỐNG MINI GAME XU NSO</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(0, 138, 0)">Tỉ lệ x 1.96 - Nạp Xu Rút Xu về
                           Game không
                           mất Phí</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(161, 0, 0)">Chơi được cả trong Game và trên
                           Web</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong>Nâng Tỉ Lệ và Hạn Mức Đặt / 1 Phái = 2.000.000.000 Xu</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(255, 153, 0)">Cung : 0 2 4 6 8 - Tỉ lệ
                           x1,96</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(0, 102, 204)">Đao : 1 3 5 7 9 - Tỉ lệ
                           x1,96</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(0, 138, 0)">Tiêu : 5 6 7 8 9 - Tỉ lệ
                           x1,96</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)">Kiếm : 0 1 2 3 4 - Tỉ lệ
                           x1,96</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(0, 41, 102)">Kunai : 0 2 4 - Tỉ lệ x3</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(178, 107, 0)">Quạt : 5 7 9 - Tỉ lệ x3
                        </strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="color: rgb(107, 36, 178)">Số Cuối : 0 1 2 3 4 5 6 7 8 9 -
                           Tỉ lệ
                           x7</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish">
                           ! Khuyên anh em nên nạp xu lên web cho ổn định</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="
                    background-color: rgb(255, 255, 204);
                    color: rgb(161, 0, 0);
                  ">
                           Tất cả giá trị Xu đều = 0 VNĐ. Web sử dụng cho mục đích giải
                           trí và chỉ cho phép chơi = Xu trong Game NSO của cty
                           Teamobi</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="
                    background-color: rgb(255, 255, 204);
                    color: rgb(161, 0, 0);
                  ">
                           Web cam kết không sử dụng và nói không với mọi hình thức Thanh
                           Toán liên quan đến Thẻ Cào , Atm , Ví , vv...</strong>
                     </h3>
                     <h3 class="ql-align-center">
                        <strong class="ql-font-Mulish" style="
                    background-color: rgb(255, 255, 204);
                    color: rgb(0, 138, 0);
                  ">Nhóm Báo Lỗi và Giao Lưu : </strong><a href="https://zalo.me/g/xhypsj216" rel="noopener noreferrer"
                           target="_blank" class="ql-font-Mulish"
                           style="background-color: initial; color: rgb(230, 0, 0)"><strong>Tại Đây</strong></a>
                     </h3>
                  </div>
               </div>
            </div>
         </div>
         <hr class="my-3 mt-[12px] mb-[12px] border-t" />
         <div class="grid grid-cols-2 gap-6">
            <div class="col-span-2 lg:col-span-1">
               <div class="rounded-[4px] border border-[#ebccd1]">
                  <div class="rounded-tl-[3px] rounded-tr-[3px] border-b border-[#ebccd1] bg-[#f2dede] py-2">
                     <h2 class="text-center text-[18px] uppercase text-[#a94442]">
                        Top Ngày
                     </h2>
                  </div>
                  <div class="rounded-bl-[3px] rounded-br-[3px] p-3">
                     <table class="w-full table-auto text-left">
                        <tbody>
                           <!-- <tr>
                              <td class="flex gap-3 text-center text-sm"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-[11px] font-bold text-white">1</span>
                                 <span>Cayvcl</span></td>
                              <td class="text-center text-sm"><span class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#f0ad4e] text-[11px] uppercase">Kunai</span></td>
                              <td class="text-end text-sm"><span class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f] text-[11px]">4,690,107,200</span></td>
                           </tr> -->
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
               <div class="rounded-[4px] border border-[#ebccd1]">
                  <div class="rounded-tl-[3px] rounded-tr-[3px] border-b border-[#ebccd1] bg-[#f2dede] py-2">
                     <h2 class="text-center text-[18px] uppercase text-[#a94442]">
                        Top Tháng
                        <button
                           class="ml-16 inline-flex items-center gap-1 rounded-sm bg-red-500 px-1 py-[1px] text-[14px] text-white hover:bggit-red-600">
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                              class="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z">
                              </path>
                           </svg>
                           Phần thưởng
                        </button>
                     </h2>
                  </div>
                  <div class="rouned-br-[3px] rounded-bl-[3px] p-3">
                     <table class="w-full table-auto text-left">
                        <tbody>
                           <!-- <tr>
                              <td class="flex gap-3 text-center text-sm"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-[11px] font-bold text-white">1</span>
                                 <span>kocain</span></td>
                              <td class="text-center text-sm"><span class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#f0ad4e] text-[11px] uppercase">Kunai</span></td>
                              <td class="text-end text-sm"><span class="whitespace-nowrap rounded-[.25em] py-0.5 px-2.5 text-[10.5px] font-semibold text-white bg-[#d9534f] text-[11px]">160,143,994,208</span></td>
                           </tr> -->
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Master>
   <HuongDan v-if="showHuongDan" @close-huong-dan="closeHuongDan()"/>
</template>
<script>
var ws = new WebSocket(import.meta.env.VITE_WEBSOCKET_HOST);
import Master from "./Master.vue";
import HuongDan from "./HuongDan.vue";
export default {
   components: {
      Master,
      HuongDan
   },
   data() {
      return {
         random: "",
         second: "",
         showHuongDan : false,
         xuThisGame: 0,
         xuPreviousGame :0,
         showRandom: false,
         splitRandom: "",
         sumSplitRandom: 0,
         resultSum: 0,
         lastNumber: 0,
         historyLastNumber: [],
         firstTimeCal: true,
         arrayColorSC: [
            "bg-[#f0ad4e]",
            "bg-[#d9534f]", // 1 chua biet
            "bg-[#5cb85c]",
            "bg-[#d9534f]", //
            "bg-[#3705fc]",
            "bg-[#67617d]", // 5
            "bg-[#d9534f]", //
            "bg-[#00b093]",
            "bg-[#7400bd]",
            "bg-[#d9534f]", //
         ],
         arrayResult: [
            ["CUNG", "KIẾM", "KUNAI"], //0
            ["ĐAO", "KIẾM", ""], //1
            ["CUNG", "KIẾM", ""], //2
            ["ĐAO", "KIẾM", ""], //3
            ["CUNG", "KIẾM", "KUNAI"], //4
            ["ĐAO", "TIÊU", "QUẠT"], //5
            ["CUNG", "TIÊU", ""], //6
            ["ĐAO", "TIÊU", ""], //7
            ["CUNG", "TIÊU", ""], //8
            ["ĐAO", "TIÊU", "QUẠT"], //9
         ],
         CDResult: ["C", "Đ", "C", "Đ", "C", "Đ", "C", "Đ", "C", "Đ"],
         TKResult: ["K", "K", "K", "K", "K", "T", "T", "T", "T", "T"],
         UQResult: ["U", "", "U", "", "U", "Q", "", "Q", "", "Q"],
      };
   },

   created() {
      ws.onopen = function (e) {
         console.log("Connection to server opened");
      };
      ws.onmessage = (e) => {
         var data = JSON.parse(e.data);

         if (this.firstTimeCal) {
            [this.second, this.random, this.historyLastNumber, this.xuThisGame, this.xuPreviousGame] = data;
            this.sumSplitRandom = 0;
            this.splitRandom = "";

            let split = String(this.random).split("");

            for (let i of split) {
               this.sumSplitRandom += parseInt(i);
               this.splitRandom += i + "+";
            }

            this.lastNumber = this.sumSplitRandom % 10;
            this.splitRandom = this.splitRandom.slice(0, -1);
            this.resultSum = this.random; // cộng thêm % hoạc tào lao gì cũng ok
            this.firstTimeCal = false;
         } else {
            [this.second, this.random, this.historyLastNumber] = data;
         }

         let minues = parseInt(this.second.split(":")[0]);

         if (minues == 0) {
            let seconds = parseInt(this.second.split(":")[1]);
            if (seconds < 15) {
               this.showRandom = true;
            }
         }
         if (this.second == "00:00") {
            [this.second, this.random, this.historyLastNumber, this.xuThisGame, this.xuPreviousGame] = data;
            this.showRandom = false;

            this.sumSplitRandom = 0;
            this.splitRandom = "";

            let split = String(this.random).split("");

            for (let i of split) {
               this.sumSplitRandom += parseInt(i);
               this.splitRandom += i + "+";
            }

            this.lastNumber = this.sumSplitRandom % 10;
            this.splitRandom = this.splitRandom.slice(0, -1);
            this.resultSum = this.random; // cộng thêm % hoạc tào lao gì cũng ok
         }
      };
      ws.onclose = (e) => {
         console.log("Connection closed");
      };
   },
   mounted() {
      console.log('trang chu ne',this.$route.fullPath);

      
      // let
      // this.second = 99;
   },
   methods: {
      closeHuongDan() {
         this.showHuongDan = false;
      },
      numberWithCommas(x) {
         return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      },
      sendMessage() {
         console.log("sendMessage");

         if (ws.readyState === WebSocket.OPEN) {
            ws.send("tinh doan da o day");
         }
      },
      disconnect() {
         ws.close();
      },
   },
};
</script>

<style scoped>
.read-the-docs {
   color: #888;
}
</style>
