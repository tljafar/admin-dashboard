<template>
    <LongCardMini :is-dark-mode="true" :items="items" />
</template>
<script>
import { randomPercentageFactor, randomScalingFactor } from '../helper';
import LongCardMini from './LongCardMini.vue';
const maximum = 100000;

export default {
    name: "MarketingReport",
    components: { LongCardMini },
    data() {
        return {
            items: [
                { label: 'Facebook Ads', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor()},
                { label: 'Google Ads', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor()},
                { label: 'TikTok Ads', amount: randomPercentageFactor() + '%', percentage: randomPercentageFactor()},
            ]
        }
    }
}
</script>
