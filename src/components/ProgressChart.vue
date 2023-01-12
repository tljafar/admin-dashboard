<template>
    <simplebar ref="alBox" class="card card-body h-100">
        <div class="al-box-container">
            <div class="al-box">
                <ul class="al-box-list">
                    <li v-for="(item, index) in datasets" :key="index" :class="{ 'flex-fill': index === 2 }">
                        <div v-if="index === 2" class="al-box-list-float">
                            <div class="al-box-list-float-wrapper">
                                <div class="al-box-list-float-title">{{ item.label }}</div>
                                <div class="al-box-list-float-subtitle">{{ item.formatedValue }}</div>
                            </div>
                        </div>
                        <div v-else class="al-box-list-content">
                            <div class="al-box-list-title">{{ item.formatedValue }}</div>
                            <div class="al-box-list-subtitle" :style="{ color: item.color }">{{ item.label }}</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div style="display: flex; margin-top: 15px; margin-bottom: 10px;">
                <div v-for="(item, index) in stackdatasets" :key="index" :style="[stackdatasets.length === index + 1 && { flex: 1 }, { marginLeft: index !== 0 ? '-4px' : '', display: 'block', backgroundColor: item.color, borderRadius: '8px', height: '8px', width: item.percentage }]"></div>
            </div>
        </div>
    </simplebar>
</template>
<script>
import simplebar from 'simplebar-vue'
import { randomScalingFactor } from '../helper';
const maximum = 10000;
export default {
    name: 'ProgressBar',
    components: { simplebar },
    data() {
        return {
            datasets: [
                { label: 'Net Profit', color: '#55efc4', ...randomScalingFactor(maximum), is_box: false },
                { label: 'Marketing Costs', color: '#ff9e0e', ...randomScalingFactor(maximum), is_box: false },
                { label: 'Revenue', color: '#283977', ...randomScalingFactor(maximum), is_box: true },
                { label: 'COGS & POD Costs', color: '#0058ff', ...randomScalingFactor(maximum), is_box: false },
                { label: 'Other Costs', color: '#ff607b', ...randomScalingFactor(maximum), is_box: false },
            ]
        }
    },
    computed: {
        stackdatasets() {
            const total = this.datasets.filter(item => !item.is_box).reduce((total, item) => total + item.value, 0);
            return this.datasets.filter(item => !item.is_box).map(item => {
                item.percentage = (100 / total) * item.value + '%';
                return item;
            })
        },
        floatboxdataset() {
            return this.datasets.find(item => item.is_box);
        }
    },
    mounted() {
        const alBox = this.$refs.alBox;
        const scrollSetMiddle = function () {
            const scrollBar = alBox.$el.querySelector('.simplebar-content-wrapper');
            scrollBar.scrollTo(scrollBar.scrollWidth / 2 - scrollBar.offsetWidth / 2 + parseFloat(scrollBar.children[0].style.paddingLeft) / 2, 0)
        }
        window.addEventListener('resize', scrollSetMiddle);
        window.addEventListener('load', scrollSetMiddle);
    }

};
</script>