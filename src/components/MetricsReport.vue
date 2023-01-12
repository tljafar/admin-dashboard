<template>
    <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-lg-3 col-sm-6 mb-4">
            <CardItem :index="index" :item="item" />
        </div>
    </div>
</template>
<script>
import { randomScalingFactor, randomPercentageFactor } from '../helper'
import CardItem from './CardItem.vue';
import tooltips from '../helper/floating/tooltips'
const maximum = 100000;
export default {
    name: "MetricsReport",
    data() {
        return {
            items: [
                { label: 'Ad Spend Per Order', amount: randomScalingFactor(100).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.ad_spend_per_order },
                { label: 'Avg. Order Value', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.avg_order_value },
                { label: 'Avg. Profit Value', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.avg_order_profit },
                { label: 'Repeat Customer', amount: randomPercentageFactor() + '%', percentage: randomPercentageFactor(), symbol: randomScalingFactor(10).value + ' Customers', is_toggle_btn: false, enabled: false, tooltip: tooltips.repeated_customers },
            ]
        };
    },
    components: { CardItem }
}
</script>
