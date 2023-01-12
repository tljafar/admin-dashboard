<template>
    <div v-tooltip="{ content: item.tooltip || '' }">
        <component
            v-bind:is="tag"
            class="card"
            :class="{ 'card-mini-dark': isDarkMode, 'card-mini-list-scroll': item.child_items }"
            :style="[item.is_toggle_btn && item.enabled === false && { 'background-color': '#ffffff2e' }]">
            <div class="card-body card-mini">
                <div class="d-flex justify-content-between card-mini-title-wrapper">
                    <div class="card-mini-title text-grey">{{ item.label }}</div>
                    <label v-if="item.is_toggle_btn" class="switch" :for="'card-mini-checkbox-' + index">
                        <input type="checkbox" :id="'card-mini-checkbox-' + index" :checked="item.enabled" @change="item.enabled = $event.target.checked" />
                        <div class="slider round"></div>
                    </label>
                    <div v-else-if="item.percentage" class="card-mini-percentage ml-1" :class="[item.percentage >= 0 ? 'text-green' : 'text-red']">
                        <span>{{ item.percentage }}%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.345" height="10.345" viewBox="0 0 10.345 10.345" fill="currentColor" class="ml-1" :class="{ 'rotate-180': item.percentage < 0 }">
                            <path id="Path_10522" data-name="Path 10522" d="M6.651,0H3.326a.665.665,0,0,0,0,1.33h1.72L.195,6.181a.665.665,0,1,0,.94.94L5.986,2.271v1.72a.665.665,0,1,0,1.33,0V.665A.665.665,0,0,0,6.651,0Z" transform="matrix(0.695, -0.719, 0.719, 0.695, 0, 5.263)" />
                        </svg>

                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-end mt-2">
                    <div class="card-mini-amount">{{ item.amount }}</div>
                    <div v-if="item.symbol" class="card-mini-currency text-grey">{{ item.symbol }}</div>
                </div>
                <div v-if="item.child_items" class="card-mini-list">
                    <ul>
                        <li v-for="(c_item, index) in item.child_items" :key="index">
                            <span>{{ c_item.label }}</span>
                            <span>{{ c_item.amount }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </component>
    </div>
</template>

<script>
import simplebar from 'simplebar-vue';

export default {
    name: "CardItem",
    components: { simplebar },
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
    },
    computed: {
        tag() {
            return this.item.child_items ? 'simplebar' : 'div';
        }
    }
}
</script>