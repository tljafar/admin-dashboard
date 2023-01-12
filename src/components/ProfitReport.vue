<template>
    <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-lg-3 col-sm-6 mb-4">
            <CardItem :index="index" :item="item" :is-dark-mode="true" />
        </div>
    </div>
</template>
<script>
import { randomScalingFactor, randomPercentageFactor } from '../helper'
import tooltips from '../helper/floating/tooltips';
import CardItem from './CardItem.vue';
const maximum = 100000;
export default {
    name: "ProfitReport",
    data() {
        return {
            items: [
                { label: 'Net Profit', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip:tooltips.net_profit },
                { label: 'Gross Profit', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.gross_profit },
                { label: 'Net Margin', amount: randomPercentageFactor() + '%', percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false, tooltip: tooltips.net_margin },
                { label: 'Gross Margin', amount: randomPercentageFactor() + '%', percentage: randomPercentageFactor(), symbol: 'USD', is_toggle_btn: false, enabled: false },
            ]
        };
    },
    components: { CardItem }
}
</script>
