<template>
    <div class="card card-body" :class="{ 'card-mini-dark': isDarkMode }">
        <div :class="{ 'row': !isFullWidth }">
            <div v-for="(item, index) in items" :key="index" class="card-mini card-mini-wide" :class="[columnClassName, { 'border-l-1': index !== 0 }]" :style="[isFullWidth && { width: 100 / itemsCount + '%' }]">
                <div class="d-flex justify-content-center">
                    <img v-if="item.logo === 'printify'" src="@/assets/images/printify.svg" alt="logo" style="width: 20px; height: 20px; margin-top: -3px; margin-right: 5px;">
                    <img v-if="item.logo === 'printful'" src="@/assets/images/printful.svg" alt="logo" style="width: 25px; height: 25px; margin-top: -4px; margin-right: 5px;">
                    <div class="text-center">
                        <div class="card-mini-title text-grey" :style="[item.logo && { fontWeight: '600', fontSize: '100%' }]">{{ item.label }}</div>
                        <div class="card-mini-amount mt-2">{{ item.amount }}</div>
                    </div>
                    <div class="card-mini-icon text-grey d-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.384" height="15.384" viewBox="0 0 15.384 15.384" fill="currentColor">
                            <g>
                                <path d="M0,0H15.384V15.384H0Z" fill="none" />
                                <path d="M1.652,9.629A5.64,5.64,0,1,1,9.629,1.652,5.64,5.64,0,1,1,1.652,9.629ZM.9,5.641A4.738,4.738,0,1,0,5.641.9,4.743,4.743,0,0,0,.9,5.641ZM5.128,7.692V5.128a.513.513,0,0,1,1.025,0V7.692a.513.513,0,1,1-1.025,0Zm0-4.1a.513.513,0,1,1,.513.513A.513.513,0,0,1,5.128,3.59Z" transform="translate(2.051 2.051)" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LongCardMini",
    props: {
        isDarkMode: {
            type: Boolean,
            default: false,
        },
        isFullWidth: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        itemsCount() {
            return this.items.length;
        },
        columnClassName() {
            let className = 'col-';
            if (this.itemsCount > 6) {
                className += 'lg-'
            }
            if (this.itemsCount < 3) {
                className += 12 / this.itemsCount;
            } else {
                className += 4;
            }
            return this.isFullWidth ? '' : className;
        },
    }
}
</script>