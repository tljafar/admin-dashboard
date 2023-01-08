<template>
    <div class="card card-body" :class="{ 'card-mini-dark': isDarkMode }">
        <div class="row">
            <div v-for="(item, index) in items" :key="index" class="card-mini card-mini-wide" :class="[items.length, (items.length < 3 ? ('col-lg-' + 12 / items.length) : 'col-lg-4'), { 'border-left-1': index !== 0 }]">
                <div class="d-flex justify-content-center">
                    <img v-if="item.logo === 'printify'" src="@/assets/images/printify.svg" alt="logo" style="width: 20px; height: 20px; margin-top: -3px; margin-right: 5px;">
                    <img v-if="item.logo === 'printful'" src="@/assets/images/printful.svg" alt="logo" style="width: 25px; height: 25px; margin-top: -4px; margin-right: 5px;">
                    <div class="text-center">
                        <div class="card-mini-title text-grey" :style="[item.log && { fontWeight: '600', fontSize: '100%' }]">{{ item.label }}</div>
                        <div class="card-mini-amount mt-2">{{ item.amount }}</div>
                    </div>
                    <div class="card-mini-icon text-grey">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
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
        items: {
            type: Array,
            default: () => []
        }
    },
}
</script>