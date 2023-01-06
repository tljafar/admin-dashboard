<template>
    <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :height="height"
        :width="width"
        :styles="styles" />
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy'
import { customDoughnutTooltip } from '../helper/chart-helper'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

var randomScalingFactor = function () {
    return Math.round(Math.random() * 900 + 100);
};

const datasetsObj = [
    { label: 'Revenue', color: '#283977' },
    { label: 'Net Profit', color: '#55efc4' },
    { label: 'Marketing Costs', color: '#ff9e0e' },
    { label: 'COGS & POD Costs', color: '#0058ff' },
    { label: 'Other Costs', color: '#ff607b' },
];
const labels = datasetsObj.map(item => item.label)

const datasets = {
    backgroundColor: datasetsObj.map(item => item.color),
    data: datasetsObj.map(() => randomScalingFactor()),
    borderRadius: 5,
    cutout: '70%'

}

export default {
    name: 'DoughnutChart',
    components: {
        Doughnut
    },
    props: {
        chartId: {
            type: String,
            default: 'doughnut-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: -1
        },
        height: {
            type: Number,
            default: -1
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            chartData: {
                labels: labels,
                datasets: [datasets],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        enabled: false,
                        external: customDoughnutTooltip,
                        callbacks: {
                            label: function (context) {
                                let label = [context.label || ''];
                                if (context.parsed !== null) {
                                    label.push(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed));
                                }
                                return label;
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            },

        }
    }
}
</script>
