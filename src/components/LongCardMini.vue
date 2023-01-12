<template>
    <div class="long-mini-card row">
        <div v-for="(item, index) in items" :key="index" class="long-mini-card-item" :class="[columnClassName]">
            <div class="card card-body card-mini card-mini-wide" :class="{ 'card-mini-dark': isDarkMode }" v-tooltip="{ content: item.tooltip || '' }">
                <div class="card-content d-flex justify-content-center">
                    <img v-if="item.logo === 'printify'" src="@/assets/images/printify.svg" alt="logo" style="width: 20px; height: 20px; margin-top: -3px; margin-right: 5px;">
                    <img v-if="item.logo === 'printful'" src="@/assets/images/printful.svg" alt="logo" style="width: 25px; height: 25px; margin-top: -4px; margin-right: 5px;">
                    <div class="text-center">
                        <div class="card-mini-title text-grey" :style="[item.logo && { fontWeight: '600', fontSize: '100%' }]">{{ item.label }}</div>
                        <div class="card-mini-amount mt-2">{{ item.amount }}</div>
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
            let className = '';

            if (this.itemsCount < 3) {
                className += 12 / this.itemsCount;
            } else {
                className += 4;
            }
            className = `col-12 col-sm-${className}`
            return this.isFullWidth ? '' : className;
        },
    }
}
</script>