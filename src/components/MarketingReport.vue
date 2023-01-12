<template>
    <LongCardMini :is-dark-mode="true" :items="items" />
</template>
<script>
import { randomScalingFactor } from '../helper';
import LongCardMini from './LongCardMini.vue';
import tooltips from '../helper/floating/tooltips';
const maximum = 100000;

export default {
    name: "MarketingReport",
    components: { LongCardMini },
    data() {
        return {
            items: [
                { label: 'Facebook Ads', amount: randomScalingFactor(maximum).formatedValue, tooltip: tooltips.facebook_ads },
                { label: 'Google Ads', amount: randomScalingFactor(maximum).formatedValue,  tooltip: tooltips.google_ads },
                { label: 'TikTok Ads', amount: randomScalingFactor(maximum).formatedValue,  tooltip: tooltips.tiktok_ads },
            ]
        }
    }
}
</script>
