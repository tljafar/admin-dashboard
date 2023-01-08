<template>
    <div class="card card-body">
        <h5 class="card-heading">Overview</h5>
        <div id="legend-container"></div>
        <LineChartGenerator
            id="my-chart-id"
            :chart-options="chartOptions"
            :plugins="plugins"
            :chart-data="chartData" />
    </div>
</template>
  
<script>

import { Line as LineChartGenerator } from 'vue-chartjs'
import {
    Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement,
} from 'chart.js'

import { customTooltip, htmlLegendPlugin } from '../helper/chart-helper'


ChartJS.register(Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement)

var randomScalingFactor = function () {
    return Math.round(Math.random() * 900 + 100);
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const datasetOption = function (label, color) {
    return {
        label: label,
        backgroundColor: color,
        borderColor: color,
        pointHoverBorderColor: color,
        pointBorderWidth: 3,
        pointRadius: -1,
        pointBorderColor: color,
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: 'white',
        pointHoverRadius: 5,
        pointHoverBorderWidth: 3,
        data: labels.map(() => randomScalingFactor())
    }
}

const datasets = [
    { label: 'Revenue', color: '#283977' },
    { label: 'Net Profit', color: '#55efc4' },
    { label: 'Marketing Costs', color: '#ff9e0e' },
    { label: 'COGS & POD Costs', color: '#0058ff' },
    { label: 'Other Costs', color: '#ff607b' },
].map((item) => datasetOption(item.label, item.color))

ChartJS.defaults.font.family = "'Poppins', sans-serif";
export default {
    name: 'LineChart',
    components: { LineChartGenerator },
    data() {
        return {
            chartData: {
                labels: labels,
                datasets: datasets
            },
            chartOptions: {
                elements: {
                    line: {
                        tension: 0.4
                    }
                },
                pointDotRadius: 1,
                pointDotStrokeWidth: 8,
                pointHitDetectionRadius: 20,
                responsive: true,
                maintainAspectRatio: false,
                stacked: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    y: {
                        ticks: {
                            padding: 20,
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            color: '#7E84A3',
                            stepSize: 200,
                        },
                        beginAtZero: true,
                        grid: {
                            drawBorder: false,
                        },
                    },
                    x: {
                        ticks: {
                            color: '#7E84A3'
                        },
                        grid: {
                            display: false,
                        }
                    }
                },
                plugins: {
                    htmlLegend: {
                        containerID: 'legend-container'
                    },
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: true,
                        }
                    },
                    tooltip: {
                        titleColor: 'black',
                        titleAlign: 'center',
                        titleMarginBottom: 12,
                        titleFont: {
                            weight: 'bold',
                            size: 18
                        },
                        bodyColor: 'black',
                        bodySpacing: 5,
                        bodyFont: {
                            size: 14
                        },
                        footerColor: 'black',
                        backgroundColor: 'white',
                        borderColor: 'black',
                        borderWidth: 1,
                        usePointStyle: true,
                        boxPadding: 10,
                        enabled: false,
                        external: customTooltip,
                        callbacks: {
                            label: function (context) {
                                let label = [context.dataset.label || ''];
                                if (context.parsed.y !== null) {
                                    label.push(new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(context.parsed.y));
                                }
                                return label;
                            }
                        }
                    }
                }
            },
            plugins: [htmlLegendPlugin]
        }
    }
}


</script>