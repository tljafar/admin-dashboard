<template>
    <div class="card card-body card-mini" :class="{ 'card-mini-dark': isDarkMode }">
        <div class="card-mini-icon text-grey">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
        </div>
        <div class="d-flex justify-content-between mt-2 card-mini-title-wrapper">
            <div class="card-mini-title text-grey">{{ item.label }}</div>
            <label v-if="item.is_toggle_btn" class="switch" :for="'card-mini-checkbox-' + index">
                <input type="checkbox" :id="'card-mini-checkbox-' + index" :checked="item.enabled" />
                <div class="slider round"></div>
            </label>
            <div v-else-if="item.percentage" class="card-mini-percentage ml-1" :class="[item.percentage >= 0 ? 'text-green' : 'text-red']">
                <span>{{ item.percentage }}%</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="{ 'rotate-180': item.percentage < 0 }">
                    <path fill-rule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0110 18z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-end mt-2">
            <div class="card-mini-amount">{{ item.amount }}</div>
            <div v-if="item.symbol" class="card-mini-currency text-grey">{{ item.symbol }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardItem",
    props: {
        index: {
            type: Number,
            default: 1
        },
        isDarkMode: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>