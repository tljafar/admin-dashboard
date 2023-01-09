<template>
    <div>
        <h5 class="card-heading">Summary Report</h5>
        <div class="card card-body mb-3">
            <div class="summary-wrapper row">
                <div v-for="(item, index) in summery_reports" :key="index" class="summary-item col-4 col-lg-auto" :class="{ 'border-lg-l-1 border-t-1 border-lg-t-0 pt-lg-0 pt-3 mt-3 mt-lg-0': index > 1, 'col-6': index < 2 }" :style="{ width: 100 / summery_reports.length + '%' }">
                    <div class="summary-subtitle">
                        <span>{{ item.label }}</span>
                        <span class="summary-icon d-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.384" height="15.384" viewBox="0 0 15.384 15.384" fill="currentColor">
                                <g>
                                    <path d="M0,0H15.384V15.384H0Z" fill="none" />
                                    <path d="M1.652,9.629A5.64,5.64,0,1,1,9.629,1.652,5.64,5.64,0,1,1,1.652,9.629ZM.9,5.641A4.738,4.738,0,1,0,5.641.9,4.743,4.743,0,0,0,.9,5.641ZM5.128,7.692V5.128a.513.513,0,0,1,1.025,0V7.692a.513.513,0,1,1-1.025,0Zm0-4.1a.513.513,0,1,1,.513.513A.513.513,0,0,1,5.128,3.59Z" transform="translate(2.051 2.051)" />
                                </g>
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