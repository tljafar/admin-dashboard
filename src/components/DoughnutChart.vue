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
import { customDoughnutTooltip, setInitTooltipValue } from '../helper/chart'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
} from 'chart.js'
import { randomScalingFactor, currencyFormat } from '../helper';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)



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
    data: datasetsObj.map(() => randomScalingFactor(100000)),
    borderRadius: 5,
    cutout: '70%',
    hoverBorderWidth: 0,
    hoverOffset: 15
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
            default: () => [setInitTooltipValue]
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
                showAllTooltips: true,
                layout: {
                    padding: {
                        top: 7,
                        bottom: 7
                    }
                },
                plugins: {
                    tooltip: {
                        enabled: false,
                        external: customDoughnutTooltip,
                        callbacks: {
                            label: function (context) {
                                let label = [context.label || ''];
                                if (context.parsed !== null) {
                                    label.push(currencyFormat(context.parsed));
                                }
                                return label;
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                interaction: {
                    mode: 'nearest',
                    intersect: true
                }
            },

        }
    }
}
</script>
