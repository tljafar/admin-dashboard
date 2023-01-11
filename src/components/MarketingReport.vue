<template>
    <LongCardMini :is-dark-mode="true" :items="items" />
</template>
<script>
import { randomPercentageFactor, randomScalingFactor } from '../helper';
import LongCardMini from './LongCardMini.vue';
import tooltips from '../helper/tooltips';
const maximum = 100000;

export default {
    name: "MarketingReport",
    components: { LongCardMini },
    data() {
        return {
            items: [
                { label: 'Facebook Ads', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), tooltip: tooltips.facebook_ads },
                { label: 'Google Ads', amount: randomScalingFactor(maximum).formatedValue, percentage: randomPercentageFactor(), tooltip: tooltips.google_ads },
                { label: 'TikTok Ads', amount: randomPercentageFactor() + '%', percentage: randomPercentageFactor(), tooltip: tooltips.tiktok_ads },
            ]
        }
    }
}
</script>
