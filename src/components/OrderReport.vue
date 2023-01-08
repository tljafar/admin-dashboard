<template>
    <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-lg-3 mb-4">
            <CardItem :index="index" :item="item" />
        </div>
    </div>
</template>
<script>
import { randomScalingFactor, randomPercentageFactor } from '../helper'
import CardItem from './CardItem.vue';
const maximum = 100000;
export default {
    name: "OrderReport",
    data() {
        return {
            items: [
                { label: 'Orders', amount: randomScalingFactor(maximum).value, percentage: randomPercentageFactor(), symbol: '', is_toggle_btn: false, enabled: false },
                { label: 'Sales', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
                { label: 'Transactions fees', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
                { label: 'Custom costs', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: true, enabled: false },
                { label: 'Tax Charged', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: true, enabled: true },
                { label: 'Shipping Charged', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
                { label: 'Shipping Costs', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
                { label: 'Discounts', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
                { label: 'Refunds', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
                { label: 'Refunds', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
                { label: 'Tips', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
            ]
        };
    },
    components: { CardItem }
}
</script>
