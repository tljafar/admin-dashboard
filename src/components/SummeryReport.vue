<template>
    <div>
        <h5 class="card-heading">Summary Report</h5>
        <div class="card card-body mb-3">
            <div class="summary-wrapper">
                <div v-for="(item, index) in summery_reports" :key="index" class="summary-item" :class="{ 'border-left-1': index !== 0 }" :style="{ width: 100 / summery_reports.length + '%' }">
                    <div class="summary-subtitle">
                        <span>{{ item.label }}</span>
                        <span class="summary-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                            </svg>
                        </span>
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
        </div>
    </div>
</template>

<script>
import { randomScalingFactor, randomPercentageFactor } from '../helper'
export default {
    name: 'SummeryReport',
    data() {
        return {
            summery_reports: [
                { label: 'Revenue', color: '#283977', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: '' },
                { label: 'Net Profit', color: '#55efc4', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: '' },
                { label: 'Marketing Costs', color: '#ff9e0e', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: '' },
                { label: 'COGS & POD Costs', color: '#0058ff', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: '' },
                { label: 'Other Costs', color: '#ff607b', value: randomScalingFactor(), percentage: randomPercentageFactor(), tooltip: '' },
            ]
        }
    }
}
</script>