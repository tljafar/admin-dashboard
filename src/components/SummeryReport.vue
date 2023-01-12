<template>
    <div>
        <h5 class="card-heading">Summary Report</h5>
        <div class="">
            <simplebar class="card card-body mb-3">
                <div class="summary-wrapper">
                    <div v-for="(item, index) in summery_reports"
                        :key="index"
                        class="summary-item"
                        :class="{ 'border-l-1': index !== 0 }"
                        v-tooltip="{ content: item.tooltip || '' }">
                        <div class="summary-subtitle">
                            <span>{{ item.label }}</span>
                        </div>
                        <div class="summary-title">{{ item.value.formatedValue }}</div>
                        <div class="summary-percentage" :class="[item.percentage >= 0 ? 'text-green' : 'text-red']">
                            <span>{{ item.percentage }}%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="summary-percentage-icon ml-1" :class="{ 'rotate-180': item.percentage < 0 }">
                                <path fill-rule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0110 18z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </simplebar>
        </div>
    </div>
</template>

<script>
import { randomScalingFactor, randomPercentageFactor } from '../helper'
import simplebar from 'simplebar-vue';
import tooltips from '../helper/floating/tooltips';
export default {
    name: 'SummeryReport',
    components: { simplebar },
    data() {
        return {
            summery_reports: [
                { label: 'Revenue', color: '#283977', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: tooltips.revenue },
                { label: 'Net Profit', color: '#55efc4', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: tooltips.net_profit },
                { label: 'Marketing Costs', color: '#ff9e0e', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: tooltips.marketing_costs },
                { label: 'COGS & POD Costs', color: '#0058ff', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: tooltips.cogs_pod_total_costs({ cogs: randomScalingFactor().formatedValue, printful: randomScalingFactor().formatedValue, printify: randomScalingFactor().formatedValue }) },
                { label: 'Other Costs', color: '#ff607b', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: tooltips.other_costs({ custom: randomScalingFactor().formatedValue, handling: randomScalingFactor().formatedValue, shipping: randomScalingFactor().formatedValue, transaction: randomScalingFactor().formatedValue }) },
            ]
        }
    }
}
</script>