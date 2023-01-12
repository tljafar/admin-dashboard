<template>
    <LongCardMini :is-dark-mode="true" :items="items" />
</template>
<script>
import { randomScalingFactor } from '../helper';
import tooltips from '../helper/floating/tooltips';
import LongCardMini from './LongCardMini.vue';
const maximum = 100000;

export default {
    name: "PrintOnDemandReport",
    components: { LongCardMini },
    data() {
        return {
            items: [
                { label: 'Printify Total Costs', amount: randomScalingFactor(maximum).formatedValue, logo: 'printify', tooltip: tooltips.printify_total_costs },
                { label: 'Printful Total Costs', amount: randomScalingFactor(maximum).formatedValue, logo: 'printful', tooltip: tooltips.printiful_total_costs },
            ]
        }
    }
}
</script>
