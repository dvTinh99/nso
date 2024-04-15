<template>
    <div class="col-span-1">
        <ul class="overflow-hidden rounded-md border">
            <li><a :class="[ currentUrl == '/danh-sach-user' ? selectClass : notSelectClass]"
                    href="/danh-sach-user"><span class="text-brown-ad"><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z">
                            </path>
                        </svg></span><span class="flex-1">Danh sách user</span><svg stroke="currentColor"
                        fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-gray-54" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                        </path>
                    </svg></a></li>
            <li>
                <a aria-current="page"
                :class="[ currentUrl == '/cong-xu' ? selectClass : notSelectClass]"
                    href="/cong-xu">
                    <span class="text-brown-ad" style="color:white"><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 288 512" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                            </path>
                        </svg>
                    </span>
                    <span class="flex-1">Cộng xu</span><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                        </path>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data() {
        return {
            currentUrl : this.$route.path,
            selectClass : 'flex cursor-pointer items-center justify-between gap-3 border px-4 py-2.5 text-sm border-brown-ad bg-brown-ad text-white',
            notSelectClass : 'flex cursor-pointer items-center justify-between gap-3 border px-4 py-2.5 text-sm hover:bg-gray-50',
        }
    },
    mounted() {
        console.log('route', this.currentUrl);
        
    },
}

</script>