<template>
    <div class="card card-body">
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

        <div style="display: flex; margin-top: 15px;">
            <div v-for="(item, index) in stackdatasets" :key="index" :style="{ marginLeft: index !== 0 ? '-4px' : '', display: 'block', backgroundColor: item.color, borderRadius: '8px', height: '8px', width: item.percentage }"></div>
        </div>
    </div>
</template>
<script>
var randomScalingFactor = function () {
    const value = Math.round(Math.random() * 80000 + 20000);
    const formatedValue = new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(value);
    return {
        value,
        formatedValue
    }
};

export default {
    name: 'ProgressBar',
    data() {
        return {
            datasets: [
                { label: 'Net Profit', color: '#55efc4', ...randomScalingFactor(), is_box: false },
                { label: 'Marketing Costs', color: '#ff9e0e', ...randomScalingFactor(), is_box: false },
                { label: 'Revenue', color: '#283977', ...randomScalingFactor(), is_box: true },
                { label: 'COGS & POD Costs', color: '#0058ff', ...randomScalingFactor(), is_box: false },
                { label: 'Other Costs', color: '#ff607b', ...randomScalingFactor(), is_box: false },
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

};
</script>