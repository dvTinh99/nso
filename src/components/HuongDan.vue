<template>
  <div
    class="relative z-10"
    id="headlessui-dialog-:r3:"
    role="dialog"
    aria-modal="true"
    data-headlessui-state="open"
    aria-labelledby="headlessui-dialog-title-:r5:"
    @click="$emit('closeHuongDan')"
  >
    <div class="fixed inset-0 bg-black/25 opacity-100"></div>
    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center">
        <div
          class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all opacity-100 scale-100"
          id="headlessui-dialog-panel-:r4:"
          data-headlessui-state="open"
        >
          <div
            class="absolute right-3 top-3 cursor-pointer p-3 pb-0 text-gray-91 transition-colors hover:text-gray-54"
          @click="$emit('closeHuongDan')">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
              ></path>
            </svg>
          </div>
          <h3
            class="border-b border-gray-200 pb-3 text-center text-2xl font-medium leading-6 text-[#a94442]"
            id="headlessui-dialog-title-:r5:"
            data-headlessui-state="open"
          >
            Hướng dẫn chơi
          </h3>
          <div class="mt-2">
            <div class="ql-container ql-snow" style="border: none">
              <div class="ql-editor">
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >HƯỚNG DẪN CHƠI: </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(51, 51, 51)"
                    >chát với Bot trong game với nội dung </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >dao</strong
                  ><strong
                    class="ql-font-Mulish"
                    style="color: rgb(51, 51, 51)"
                  >
                    hoặc </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >cung</strong
                  ><strong
                    class="ql-font-Mulish"
                    style="color: rgb(51, 51, 51)"
                  >
                    hoặc </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >tieu</strong
                  ><strong
                    class="ql-font-Mulish"
                    style="color: rgb(51, 51, 51)"
                  >
                    hoặc </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >kiem </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(51, 51, 51)"
                    >sau đó gd với bot số xu muốn đặt
                  </strong>
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(92, 0, 0)"
                    >CÁCH TÍNH KẾT QUẢ:</strong
                  ><strong class="ql-font-Mulish" style="color: rgb(0, 138, 0)">
                    Xu Tham Gia </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >+</strong
                  ><strong class="ql-font-Mulish" style="color: rgb(0, 138, 0)">
                    Số Ngẫu Nhiên </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >+</strong
                  ><strong class="ql-font-Mulish" style="color: rgb(0, 138, 0)">
                    Tỉ Lệ % </strong
                  ><strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >+</strong
                  ><strong class="ql-font-Mulish" style="color: rgb(0, 138, 0)">
                    Số Người Tham Gia</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(92, 0, 0)"
                    >( Lấy số cuối để chốt Kết Quả )</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong>Hạn Mức Đặt / 1 Phái = 2.000.000.000 Xu</strong>
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(255, 153, 0)"
                    >Cung : 0 2 4 6 8 - Tỉ lệ x1,96</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(0, 102, 204)"
                    >Đao : 1 3 5 7 9 - Tỉ lệ x1,96</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(0, 138, 0)"
                    >Tiêu : 5 6 7 8 9 - Tỉ lệ x1,96</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(230, 0, 0)"
                    >Kiếm : 0 1 2 3 4 - Tỉ lệ x1,96</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(0, 41, 102)"
                    >Kunai : 0 2 4 - Tỉ lệ x3</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish" style="color: rgb(178, 107, 0)"
                    >Quạt : 5 7 9 - Tỉ lệ x3</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong
                    class="ql-font-Mulish"
                    style="color: rgb(107, 36, 178)"
                    >Số Cuối : 0 1 2 3 4 5 6 7 8 9 - Tỉ lệ x7</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish">
                    ! Khuyên anh em nên nạp xu lên web cho ổn định</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong class="ql-font-Mulish"
                    >! Tất cả các bot đều ở trong gia tộc </strong
                  ><strong
                    class="ql-font-Mulish"
                    style="
                      color: rgb(255, 255, 255);
                      background-color: rgb(0, 0, 0);
                    "
                    >dctkme</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong
                    class="ql-font-Mulish"
                    style="
                      color: rgb(161, 0, 0);
                      background-color: rgb(255, 255, 204);
                    "
                  >
                    Tất cả giá trị Xu đều = 0 VNĐ. Web sử dụng cho mục đích giải
                    trí và chỉ cho phép chơi = Xu trong Game NSO của cty
                    Teamobi</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong
                    class="ql-font-Mulish"
                    style="
                      color: rgb(161, 0, 0);
                      background-color: rgb(255, 255, 204);
                    "
                  >
                    Web cam kết không sử dụng và nói không với mọi hình thức
                    Thanh Toán liên quan đến Thẻ Cào , Atm , Ví , vv...</strong
                  >
                </h3>
                <h3 class="ql-align-center">
                  <strong
                    class="ql-font-Mulish"
                    style="
                      color: rgb(0, 138, 0);
                      background-color: rgb(255, 255, 204);
                    "
                    >Nhóm Báo Lỗi và Giao Lưu : </strong
                  ><a
                    href="https://zalo.me/g/xhypsj216"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="ql-font-Mulish"
                    style="color: rgb(230, 0, 0); background-color: initial"
                    ><strong>Tại Đây</strong></a
                  >
                </h3>
                <h1 class="ql-align-center"><br /></h1>
                <h5 class="ql-align-center"><br /></h5>
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-end border-t border-gray-f6 pt-4">
            <button
              type="button"
              class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
</style>
